export const PROJECTS = [
  {
    title: 'Brick Bench',
    startDate: '03/2021',
    tags: ['React', 'Frontend'],
    content: (
      <div>
        <img
          className="img-fluid rounded"
          src="/images/brick-bench.png"
          alt="3d boids"
        />
        A friend is working on a modding tool called Brick Bench for the PC game
        Lego Stars Wars the Complete Saga. I made{' '}
        <a href="https://brickbench.opengg.dev/">the website</a> for the
        project, check it out!
      </div>
    ),
  },
  {
    title: 'LitheGL',
    startDate: '09/2019',
    tags: ['Graph Theory', 'React', 'Frontend'],
    content: (
      <div>
        <img
          className="img-fluid rounded"
          src="/images/lithegl.png"
          alt="3d boids"
        />
        One of my earliest forays into web devleopment,{' '}
        <a href="https://aydangoon.github.io/Graph-Library">LitheGL</a> is an
        online graph creation tool for a wide array of graph theory purposes.
        You can easily create, customize and analyze graphs. LitheGL features
        15+ different algorithms to run on your graph, and a command line to
        streamline the process of graph editting and creation. Currently I've
        learned a lot since I made LitheGL. Currently I'm working on a newer
        version that focuses solely on simplicity and satisfying real use cases.
        In fitting with the theme of simplifying, I've decided to call this
        version lithe. More updates to come!
      </div>
    ),
  },
  {
    title: '2D Boids',
    startDate: '09/2018',
    tags: ['Simulations', 'C#/Unity'],
    content: (
      <div>
        <img
          className="img-fluid rounded"
          src="/images/2dboids.png"
          alt="3d boids"
        />
        Using the 3 main principles of Reynolds paper—cohesion, alignment, and
        separation—I was able to get a rather satisfying 2D flock simulation. I
        added random obstacles so the boids are forced break and alter flock
        shape. See the code{' '}
        <a href="https://github.com/aydangoon/2D-Boids">here</a>.
      </div>
    ),
  },
  {
    title: 'Batesian Mimicry',
    startDate: '04/2019',
    tags: ['Simulations', 'C#/Unity'],
    content: (
      <div>
        <img
          className="img-fluid rounded"
          src="/images/batesian.png"
          alt="3d boids"
        />
        A simulation of how Batesian Mimicry naturally arises in a population
        through the mechanism of natural selection. A carnivorous species and a
        herbivorous species populate the 3D environment complete with natural
        obstacles and vegetation. Check out{' '}
        <a href="https://www.youtube.com/watch?v=CC0YnfoMziY">this video</a>{' '}
        about the project!
      </div>
    ),
  },

  {
    title: '3D Boids',
    startDate: '11/2018',
    tags: ['Simulations', 'C#/Unity'],
    content: (
      <div>
        <img
          className="img-fluid rounded"
          src="/images/3dboids.gif"
          alt="3d boids"
        />
        A simulation of 3D flock behavior modeled in Unity. To improve from the
        2D version I added better collision detection and avoidance so the boids
        can navigate an environment filled with obstacles. See the code{' '}
        <a href="https://github.com/aydangoon/3D-Boids">here</a>.
      </div>
    ),
  },
  {
    title: 'One Night Werewolf Online',
    startDate: '11/2018',
    tags: ['Frontend', 'Backend', 'Socket.io', 'Expressjs'],
    content: (
      <div>
        <img
          className="w-50 rounded"
          src="/images/werewolf.png"
          alt="3d boids"
        />
        <br />
        One Night Werewolf Online is a real-time multiplayer card game. You can
        create private lobbies and play with up to 10 other players. I've
        included 10+ unique roles and an array of customizable gameplay
        settings. Here's a{' '}
        <a href="https://www.youtube.com/watch?v=NZQ9oyJ4FP8">demo</a>.
      </div>
    ),
  },
]
