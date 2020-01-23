
    //create an array of hikes
    const hikeList = [
        {
          name: 'Bechler Falls',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Bechler Falls',
          distance: '3 miles',
          difficulty: 'Easy',
          description:
            'Beautiful short hike along the Bechler river to Bechler Falls',
          directions:
            'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
        },
        {
          name: 'Teton Canyon',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Teton Canyon',
          distance: '5 miles',
          difficulty: 'Moderate',
          description: 'Beautiful short hike up Teton Canyon',
          directions:
            'Take Highway 33 to Driggs. Turn right into the town and continue through. Follow that road for a few miles then turn right up Teton Canyon. Drive to the end of the road. There is a parking area at the trailhead.'
        },
        {
          name: 'Denanda Falls',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Denanda Falls',
          distance: '12 miles',
          difficulty: 'Moderate',
          description:
            'Beautiful hike through Bechler Meadows to Denanda Falls',
          directions:
            'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for several miles then turn left again at the sign for the Bechler Meadows ranger station. There is a parking area at the trailhead.'
        }
      ];


const listElement = document.getElementById("hikes");
const imgPath = "https://byui-cit.github.io/cit261/examples/";
console.dir(listElement);
listElement.innerHTML = "";

function buildHikeDetails(hike) {
const item = document.createElement("li");
    item.innerHTML = `<img
    src="https://byui-cit.github.io/cit261/examples/falls.jpg"
    alt="Image of Bechler Falls"
    />
    <h2>${hike.name}</h2>
    <div>
    <h3>Distance</h3>
    <p>3 miles</p>
    </div>
    <div>
    <h3>Difficulty</h3>
    <p>${hike.difficulty}</p>
    </div>
    <div>
    <h3>Description</h3>
    <p>Beautiful short hike along the Bechler river to Bechler Falls</p>
    </div>
    <div>
    <h3>How to get there</h3>
    <p>
      Take Highway 20 north to Ashton. Turn right into the town and
      continue through. Follow that road for a few miles then turn left
      again onto the Cave Falls road. Drive to the end of the Cave Falls
      road. There is a parking area at the trailhead.
    </p>
    </div>`;
    item.addEventListener();
    return item;
}

function buildHikeLight(hike) {
    const item = document.createElement("li");
        item.innerHTML = `<h2>${hike.name}</h2>
        <div>
        <img src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}"
        alt="${hike.imgAlt}" />
        </div>
        <div>
        <h3>Distance</h3>
        <p>${hike.distance}</p>
        </div>
        <div>
        <h3>Difficulty</h3>
        <p>${hike.difficulty}</p>
        </div>`;
        item.addEventListener("touched", e => {
            console.log(e.currentTarget.children[0]);
            e.currentTarget.querySelector('h2');
        });
        return item;
    }

function buildList() {
    hikeList.forEach(hike => {
        listElement.appendChild(buildHikeLight(hike));
    });
}
buildList();

