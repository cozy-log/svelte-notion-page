# svelte-notion-page

> This library is an experimental state. It would be changed rapidly.

`svetle-notion-page` is component who render page using a notion. see [example](/src/routes/+page.svelte).

## Installation
```bash
npm install -D svelte-notion-page
```

## Using a customized provider

```sveltehtml

<script lang="ts">
    import { defaultComponents, NotionComponentProvider, NotionPage } from 'svelte-notion-page';
    import { json } from './post';
    import { setContext } from 'svelte';
    import { PROVIDER_KEY } from 'svelte-notion-page/context';
    import Test from './Test.svelte';

    const provider = new NotionComponentProvider({
        ...defaultComponents,
        paragraph: Test
    });
    setContext(PROVIDER_KEY, provider);
</script>

<NotionPage content={json}/>
```