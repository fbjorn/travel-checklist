<script lang="ts">
    export let siteName: string
    export let description: string
    export let image: string
  
    export let title: string | undefined = undefined
    export let imageWidth = 1200
    export let imageHeight = 630
  
    const pageTitle = title ? `${title} | ${siteName}` : siteName
  </script>
  
  <svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content={"en-US"} />
    <meta property="og:type" content={"website"} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
  
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content={`${imageWidth}`} />
    <meta property="og:image:height" content={`${imageHeight}`} />
  </svelte:head>
  