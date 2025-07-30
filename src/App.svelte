<script>

  import { onMount } from 'svelte';
  let theme = 'dark';

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    updateBodyClass();
  }

  function updateBodyClass() {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }

  onMount(() => {
    updateBodyClass();
  });

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
      image: './src/assets/suffs.JPG',
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
      title: "The Lion King",
      image: './src/assets/lionking.png',
      status: "seen"
    },
    {
      title: "The Wiz",
      image: './src/assets/wiz.JPG',
      status: "seen"
    },
    {
      title: "Water for Elephants",
      image: './src/assets/elephants.JPG',
      status: "seen"
    },
    {
      title: "Wicked",
      image: './src/assets/wicked.JPG',
      status: "seen"
    },
    {
      title: "Dear Evan Hansen",
      image: './src/assets/evan.jpeg',
      status: "want to see"
    },
    {
      title: "Death Becomes Her",
      image: './src/assets/dbh.jpeg',
      status: "want to see"
    },
    {
      title: "Hell's Kitchen",
      image: './src/assets/hellskitchen.jpeg',
      status: "want to see"
    },
    {
      title: "MJ",
      image: './src/assets/mj.JPG',
      status: "want to see"
    },
    {
      title: "Moulin Rouge",
      image: './src/assets/moulin.JPG',
      status: "want to see"
    },
    {
      title: "Once Upon a One More Time",
      image: './src/assets/onemoretime.JPG',
      status: "want to see"
    },
    {
      title: "Sunset Boulevard",
      image: './src/assets/sunset.jpeg',
      status: "want to see"
    },
    {
      title: "The Outsiders",
      image: './src/assets/outsiders.JPG',
      status: "want to see"
    },
    {
      title: "The Phantom of the Opera",
      image: './src/assets/phantom.jpeg',
      status: "want to see"
    }
  ];

</script> 

  <main class = {theme}>

    <button on:click = {toggleTheme} class = "theme-toggle">
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>

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

/* General Layout */
/* body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #0d0b1a;
  overflow-x: hidden;
} */

:global(body) {
  margin: 0;
  padding: 0;
  transition: background-color 0.3s;
}

:global(body.dark) {
  background-color: #0d0b1a; /* dark background */
}

:global(body.light) {
  background-color: #fcf1e6; /* light background */
}

main {
  width: 100%;
  min-height: 100vh;
  background-color: #0d0b1a;
  padding: 50px 50px;
  box-sizing: border-box;
  margin: 0 auto;
}

/* Dark mode */
main.dark {
  background-color: #0d0b1a;
  color: #f4f4f4;
}

main.dark .main-heading,
main.dark h2 {
  color: #e63946;
}

main.dark .show-card {
  background: #1f1a3a;
  color: #f4f4f4;
}

main.dark .show-card:hover {
  background: #2b2250;
}

main.dark .theme-toggle {
  background-color: #f76c6c;
  color: #ffffff;
}

main.dark .theme-toggle:hover {
  background-color: #ffd166;
}

/* Light mode */
main.light {
  background-color: #fcf1e6;
  color: #1a1a1a;
}

main.light .main-heading,
main.light h2 {
  color: #e63946;
}

main.light .show-card {
  background: #ffffff;
  color: #222222;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

main.light .theme-toggle {
  background-color: #e63946;
  color: #0d0b1a;
}

main.light .theme-toggle:hover {
  background-color: #f76c6c;
}

/* Heading */
.main-heading {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Merriweather', serif;
  text-shadow: 0 0 10px rgba(255, 183, 3, 0.3);
}

/* Subheadings */
h2 {
  font-size: 1.8rem;
  margin: 40px 0 20px;
  text-align: center;
  font-weight: 600;
  font-family: 'Merriweather', serif;
}

/* Main Image */
.main-photo {
  width: 70%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto 40px;
  display: block;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

/* Toggle Button */
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  z-index: 10;
  transition: background 0.3s;
}

/* Grid Layout */
.shows {
  max-width: 1200px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 40px;
}

/* Cards */
.show-card {
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s, background 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.show-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

/* Card Images */
.show-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}

/* Card Titles */
.show-card h3 {
  font-size: 1rem;
  font-family: 'Georgia', serif;
  margin-top: 8px;
  font-style: italic;
}

</style>