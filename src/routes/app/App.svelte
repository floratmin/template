<script>
  import Routes from '../../components/Routes.svelte';
  export let data;
  let d = {routes: data.routes, content: data.content};
</script>

<Routes hydrate-client={{d}} />
