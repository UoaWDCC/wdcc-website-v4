## Creating a new Payload collection

see [payload field overview docs](https://payloadcms.com/docs/fields/overview)

```ts
import type { CollectionConfig } from "payload";

// all field will look something like this
export const Page: CollectionConfig = {
    slug: SLUG.EXAMPLE, // create a new SLUG enum from lib
    fields: [
        // ...
    ],
};
```

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

### calling payload

payload is completely server sided which is cool,
to use it you can call

```ts
const payload = await getPayload({ config: payloadConfig });
const { docs: events } = await payload.find({
    collection: SLUG.EVENTS,
});
```

### generating payload type

if you have any problem with node version on pnpm have a look at this
https://github.com/volta-cli/volta/issues/1562

tldr;

```
pnpm node -v  ->  v22.11.0
volta install pnpm
volta pin pnpm
pnpm node -v  -> v20.18.1
```
