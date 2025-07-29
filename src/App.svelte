<script>

  let shows = [
    {
      title: "& Juliet",
      image: './src/assets/andjuliet.JPG',
      status: "seen"
    },
    // {
    //   title: "& Juliet",
    //   image: andjuliet,
    //   status: "seen"
    // },
    // {
    //   title: "& Juliet",
    //   image: andjuliet,
    //   status: "seen"
    // }
  ];

</script>

<main>
  <h1 class = "main-heading">Broadway Shows 🎭</h1>

  <h2>Shows I've Seen</h2>
  <div class = "shows">
    {#each shows.filter(show => show.status === 'seen') as show}
      <div class = "show-card">
        <img src = {show.image} alt = {show.title}/>
        <h3>{show.title}</h3>
      </div>
    {/each}
  </div>

  <h2>Shows I Want to See</h2>
  <div class = "shows">
    {#each shows.filter(show => show.status === 'want to see') as show}
      <div class = "show-card">
        <img src = {show.image} alt = {show.title}/>
        <h3>{show.title}</h3>
      </div>
    {/each}
  </div>

</main>

<style>
  
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */

  h1 {
    font-family: Arial, sans-serif;
  }

  .shows {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .show-card {
    border: 1px solid #ccc;
    padding: 10px;
    width: 150px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .main-heading {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 40px;
    color: #8b0000;
  }

</style>
