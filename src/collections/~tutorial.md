## Creating a new Payload collection

see [payload field overview docs](https://payloadcms.com/docs/fields/overview)

```ts
import type { CollectionConfig } from "payload";

// all field will look something like this
export const Page: CollectionConfig = {
    slug: SLUG.EXAMPLE, // create a new SLUG object under slug.ts
    fields: [
        // ...
    ],
};
```

also make sure to add the slug value to the [gitignore](../../.gitignore),

```ts
# slug.ts
export const SLUG = {
    EVENTS: "Events" as string,
};
```

```
# .gitignore
/Events
```

this is because for

[open slug.ts here](../libs/consts/slug.ts)

### all available field types

```
Array -         for repeating content, supports nested fields
Blocks -        for block-based content, supports nested fields
Checkbox -      saves boolean true / false values
Code -          renders a code editor interface that saves a string
Date -          renders a date picker and saves a timestamp
Email -         ensures the value is a properly formatted email address
Group -         nests fields within a keyed object
JSON -          renders a JSON editor interface that saves a JSON object
Number -        saves numeric values
Point -         for location data, saves geometric coordinates
Radio -         renders a radio button group that allows only one value to be selected
Relationship -  assign relationships to other collections
Rich Text -     renders a fully extensible rich text editor
Select -        renders a dropdown / picklist style value selector
Tabs (Named) -  similar to group, but renders nested fields within a tabbed layout
Text -          simple text input that saves a string
Textarea -      similar to text, but allows for multi-line input
Upload -        allows local file and image upload
```

after creating a new collection you can just export it then add it into the collections field in [payload.config.ts](../payload.config.ts)

```
 collections: [Users, Media, ...]
```

### generating payload type

> [!IMPORTANT]  
> at the moment payload only supports node version 20.x

if you have any problem with node version on pnpm have a look at this
https://github.com/volta-cli/volta/issues/1562

tldr; you have to install pnpm with volta

```bash
# broken
node -v # output: v20.18.1
pnpm node -v  # output: v22.11.0

# solution
echo $VOLTA_FEATURE_PNPM=1
volta install pnpm
volta pin pnpm
pnpm node -v  # output: v20.18.1
```

### calling collections

payload is completely `server sided` which is cool,
to use it you can call

```ts
const payload = await getPayload({ config: payloadConfig });
const { docs: events } = await payload.find({
    collection: SLUG.EVENTS,
});
```

### working with slug

```ts
// import the types from @/payload-types
import { Event } from "@/payload-types";

{(events as Event[]).map((event) => (
    do anything with it
))}
```

if the types aren't there, but the collection does exist, make sure to check [payload.config.ts](../payload.config.ts) and run

`pnpm run payload generate:types`
