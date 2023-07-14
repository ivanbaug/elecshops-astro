# elecshops-astro

This is the frontend for [my electronics component locator](https://github.com/ivanbaug/go-elecshops) project. A site to view/find electronics components from stores in my city.


## Check the demo
https://ivanbaug.github.io/elecshops-astro/

## Technologies used
I used [Astro](https://astro.build/) because of the hype, but this project is so simple that it could be done with pure html and js without much difference, in fact I ended up writing a bunch of ts code and using nanostores to handle states between components, which I feel defeats the purpose of the Astro framework as a static site generator. Also I tried [TailwindCSS](https://tailwindcss.com/) for the first time and it's pretty convinient, making style changes is simple enough and the resulting .css file is really small.

- Install instances: 
```
npm install
```

- To run the development server:
```
npm start
```
- Deploying to Github Pages: https://docs.astro.build/en/guides/deploy/github/

## Screenshots

<img src="ghimages\es1.png" alt="full" height="400" />


<img src="ghimages\es2.png" alt="mobile1" height="500" />
<img src="ghimages\es3.png" alt="mobile2" height="500" />