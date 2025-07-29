<script>

  let shows = [
    {
      title: "& Juliet",
      image: './src/assets/andjuliet.JPG',
      status: "seen"
    },
    {
      title: "Aladdin",
      image: './src/assets/aladdin.JPG',
      status: "seen"
    },
    {
      title: "Back to the Future",
      image: './src/assets/bttf.JPG',
      status: "seen"
    },
    {
      title: "Beetlejuice",
      image: './src/assets/beetlejuice.JPG',
      status: "seen"
    },
    {
      title: "Charlie And The Chocolate Factory",
      image: './src/assets/charlie.png',
      status: "seen"
    },
    {
      title: "Elf",
      image: './src/assets/elf.JPG',
      status: "seen"
    },
    {
      title: "Frozen",
      image: './src/assets/frozen.JPG',
      status: "seen"
    },
    {
      title: "Hadestown",
      image: './src/assets/hadestown.jpg',
      status: "seen"
    },
    {
      title: "Hamilton",
      image: './src/assets/hamilton.JPG',
      status: "seen"
    },
    {
      title: "Harry Potter & the Cursed Child",
      image: './src/assets/harrypotter.JPG',
      status: "seen"
    },
    {
      title: "Illinoise",
      image: './src/assets/illinoise.JPG',
      status: "seen"
    },
    {
      title: "Into the Woods",
      image: './src/assets/ittw.JPG',
      status: "seen"
    },
    {
      title: "Kimberly Akimbo",
      image: './src/assets/kimberly.JPG',
      status: "seen"
    },
    {
      title: "Kinky Boots",
      image: './src/assets/kinkyboots.png',
      status: "seen"
    },
    {
      title: "Life of Pi",
      image: './src/assets/lifeofpi.jpg',
      status: "seen"
    },
    {
      title: "New York, New York",
      image: './src/assets/nyny.JPG',
      status: "seen"
    },
    {
      title: "Once Upon a Mattress",
      image: './src/assets/mattress.JPG',
      status: "seen"
    },
    {
      title: "Shucked",
      image: './src/assets/shucked.JPG',
      status: "seen"
    },
    {
      title: "Six",
      image: './src/assets/six.JPG',
      status: "seen"
    },
    {
      title: "Slava's Snowshow",
      image: './src/assets/slava.JPG',
      status: "seen"
    },
    {
      title: "Spamalot",
      image: './src/assets/spamalot.JPG',
      status: "seen"
    },
    {
      title: "SpongeBob SquarePants",
      image: './src/assets/spongebob.JPG',
      status: "seen"
    },
    {
      title: "Suffs",
      image: './src/assets/suffs.png',
      status: "seen"
    },
    {
      title: "Sweeney Todd",
      image: './src/assets/sweeneytodd.JPG',
      status: "seen"
    },
    {
      title: "The Illusionists - Magic of the Holidays",
      image: './src/assets/illusionists.png',
      status: "seen"
    },
    {
      title: "Wicked",
      image: './src/assets/wicked.jpg',
      status: "seen"
    },
    {
      title: "The Lion King",
      image: './src/assets/lionking.jpg',
      status: "seen"
    },
    {
      title: "Moulin Rouge",
      image: './src/assets/moulinrouge.jpg',
      status: "seen"
    },
    {
      title: "& Juliet",
      image: andjuliet,
      status: "seen"
    },
    {
      title: "& Juliet",
      image: andjuliet,
      status: "seen"
    }
  ];

</script>

<main>
  <h1 class = "main-heading">Broadway Shows 🎭</h1>

  <img src = "./src/assets/broadway.jpg" alt = "Times square at night" class = "main-photo"/>

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