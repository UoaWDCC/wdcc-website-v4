/* eslint-disable @typescript-eslint/no-require-imports */

const { exec } = require("child_process");
const listRoutes = require("./list-route");
const fs = require("fs");
const path = require("path");

//
// generate next route into the index.ts
// node '.\src\utils\route\generate-index.js'
//

console.log("------------------------------------------------------");
console.log("Generating routes...");
let routes = listRoutes();
const numberOfRoutes = routes.length;
console.log("Number of routes:", numberOfRoutes);

// ==========================================
// configuration
// ==========================================

// priority = higher => suffix check higher priority
// order = lower => displayed order in the devtools
const METADATA = {
    LANDING: { includes: "(hero)", priority: 0, order: 1 },
    PROJECTS: { includes: "/projects/", priority: 1, order: 2 },
    EVENTS: { includes: "/events", priority: 2, order: 3 },
    ABOUT: { includes: "/about", priority: 3, order: 4 },
    OTHER: { includes: "/", priority: 1000, order: 5 },
    BRAINROT: { includes: "/brainrot-lol", priority: 999, order: 99 },
    TEST: { includes: "/test/", priority: 998, order: 100 },
};

// typescript typing
const routeType = `
// automatically generated with generate-index.js, 
// last generated: ${new Date().toLocaleDateString("en-NZ")}

export type RouteSection = {
    name: string;
    routes: Route[];
};

export type Route = { url: string; name: string };
`;

const routeGrouping = [];

const filterEntries = Object.entries(METADATA).sort((a, b) => a[1].priority - b[1].priority);

for (const [key, value] of filterEntries) {
    const namedRoutes = routes.filter((route) => route.url.includes(value.includes));
    routes = routes.filter((route) => !route.url.includes(value.includes));

    const name = `${key.charAt(0).toUpperCase()}${key.toLowerCase().slice(1)} Routes`;

    const namedRoutesGroupNormalised = namedRoutes.map((route) => {
        return {
            ...route,
            url: `${route.url}`
                .replace(/\((.*?)\)/g, "") // remove (group) segments
                .replace(/\/+/g, "/"), // normalize slashes
        };
    });

    console.log(namedRoutesGroupNormalised);

    routeGrouping.push({
        key,
        name,
        routes: namedRoutesGroupNormalised,
    });
}

const buildGroupExportName = (group) => {
    return group.name.toUpperCase().replaceAll(" ", "_");
};

const buildGroupString = (group) => {
    delete group.key;
    const groupName = buildGroupExportName(group);
    const stringifyGroup = JSON.stringify(group, null, 2);
    return `export const ${groupName}: RouteSection = ${stringifyGroup};`;
};

const buildRouteSystemExport = (group) => {
    const routeSystemExportedGroups = group.map((r) => buildGroupExportName(r));
    return `export const ROUTE_SYSTEM: RouteSection[] = [${routeSystemExportedGroups.join(", ")}];`;
};

routeGrouping.sort((a, b) => METADATA[a.key].order - METADATA[b.key].order);
const exportedGroups = routeGrouping.map((group) => buildGroupString(group));

const indexContent = routeType + "\n" + exportedGroups.join("\n\n") + "\n\n" + buildRouteSystemExport(routeGrouping);

fs.writeFileSync(path.join(__dirname, "index.generated.ts"), indexContent);
console.log("finished generating routes");
console.log("Saved to src/libs/routes/index.generated.ts");
console.log("------------------------------------------------------");

// format generated index
exec("npx prettier --write src/utils/route/index.generated.ts", (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`⚠️ Stderr: ${stderr}`);
        return;
    }
    console.log(`✅ File formatted:\n ${stdout}`);
});
