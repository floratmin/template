<script>
  import Routes from '../../components/Routes.svelte';
  export let data;
</script>

<Routes hydrate-client={{data}} />
