<script>
  import "../style.css";
  import Map from "./Map.svelte";
  let showAbout = "none";
  function aboutClicked() {
    showAbout = "grid";
  }
  function closeAbout() {
    showAbout = "none";
  }
  let showAddData = "none";
  function addDataClicked() {
    showAddData = "grid";
  }
  function closeAddData() {
    showAddData = "none";
  }
</script>

<nav>
  <h1 id="title">Comapping</h1>
  <button class="about" on:click={aboutClicked}> About </button>
  <button class="add" on:click={addDataClicked}> Add Your Data </button>
</nav>
<main>
  <article>
    <Map />
  </article>
  <aside class="about" id="about-overlay" style="display: {showAbout};">
    <button on:click={closeAbout}> Close </button>
    <h2>About</h2>
    <h3>What is Comapping?</h3>
    <p>
      Comapping looks at what mapping looks like when it is done from below, by
      the people who use and live in a space.
    </p>
    <h3>How can I participate?</h3>
    <p>
      By submitting 'data points' of pictures, audio, text or even walk routes,
      people fill up the online platform at comapping.org. These data points can
      focus on anything from where certain trees are to thoughts linked to
      different areas to just documenting everything yellow.
    </p>
    <p>
      These points are shown at comapping.org, which brings these community
      observations together to explore interactively.
    </p>
    <h3>Who created this?</h3>
    <p>
      The platform as part of <a href="https://comapping.org">Comapping</a>, a
      project by <a href="https://radicaldata.org">Radical Data</a>.
    </p>
  </aside>

  <aside class="add" id="add-overlay" style="display: {showAddData};">
    <button on:click={closeAddData}> Close </button>
    <h2>Add Your Data</h2>
    <h3>What data should I submit?</h3>
    <p>
      Anyone visiting Amelisweerd is invited to record things of interest and
      submit them to the Comapping platform.
    </p>
  </aside>
</main>
