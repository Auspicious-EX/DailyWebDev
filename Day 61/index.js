function createCard(titlename, cname, views, time, dur, backgroundImage) {
    // Convert views to K or M format if applicable
    let formattedViews;
    if (views < 10000) {
        formattedViews = (views / 1000) + "K";
    } else if (views < 10000000) {
        formattedViews = (views / 100000) + "M";
    } else {
        formattedViews = views;
    }

    const container = document.createElement('div');
    container.className = 'container';

    const imageDiv = document.createElement('div');
    imageDiv.className = 'image';
    imageDiv.style.backgroundImage = `url(${backgroundImage})`;

    const durSpan = document.createElement('span');
    durSpan.className = 'dur';
    durSpan.textContent = dur;
    imageDiv.appendChild(durSpan);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'titlename';
    titleSpan.textContent = titlename;
    titleDiv.appendChild(titleSpan);

    const discDiv = document.createElement('div');
    discDiv.className = 'disc';

    const cnameSpan = document.createElement('span');
    cnameSpan.className = 'cname';
    cnameSpan.textContent = cname;
    discDiv.appendChild(cnameSpan);

    const viewsSpan = document.createElement('span');
    viewsSpan.className = 'views';
    viewsSpan.textContent = `${formattedViews} views`;
    discDiv.appendChild(viewsSpan);

    const timeSpan = document.createElement('span');
    timeSpan.className = 'time';
    timeSpan.textContent = `${time} months ago`;
    discDiv.appendChild(timeSpan);

    infoDiv.appendChild(titleDiv);
    infoDiv.appendChild(discDiv);

    container.appendChild(imageDiv);
    container.appendChild(infoDiv);

    document.getElementById('card-container').appendChild(container);
}

createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
    "Introduction to Backend | Sigma Web Dev video #78",
    "CodeWithHarry",
    500000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
