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

body {
  background-color: #1b1b2f;
  color: #e0e0e0;
  font-family: 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
}

.main-heading {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 40px;
  color: #f0c808;
  text-shadow: 0 0 10px rgba(240, 200, 8, 0.3);
}

h2 {
  color: #f0c808;
  font-size: 1.8rem;
  margin: 40px 0 20px;
  text-align: center;
}

.main-photo {
  width: 80%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin: 0 auto 40px;
  display: block;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.shows {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  padding: 0 20px;
  margin-bottom: 40px;
}

.show-card {
  background: #27293d;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s, background 0.3s;
}

.show-card:hover {
  transform: scale(1.05);
  background: #3e4164;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.show-card img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 10px;
}

.show-card h3 {
  font-size: 1rem;
  font-family: 'Georgia', serif;
  color: #f0f0f0;
}

</style>