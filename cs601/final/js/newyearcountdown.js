const animation = {

    // dom element selected for function
    newYear: document.querySelector(".new-year"),
    
    // generate random number
    range: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // 
    get period() {
        // dateFuture is Date() obj of local currentYear+1, month, date
        let dateFuture = new Date(new Date().getFullYear() + 1, 0, 1);
        // dateNow is Date() obj of local current Date()
        let dateNow = new Date();

        // get days, hours, minutes, seconds
        let seconds = Math.floor((dateFuture - (dateNow)) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

        // return as new Date()
        return {
            year: new Date().getFullYear() + 1,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    },
    // shortcut for creating element
    element: (parent, type, className, html) => {
        // create new element and set className
        let element = document.createElement(type);
        element.className = className;
        
        // add innerHTML
        if (typeof html !== "undefined") {
            element.innerHTML = html;
        }
        parent.appendChild(element);
        return element;
    },
    year: (className) => {
        // use GreenSock library to control animation timeline
        // https://greensock.com/docs/v2/TimelineMax
        let timeline = new TimelineMax();
        let year = animation.element(animation.newYear, "div", className);
        
        // loop through each digit in the year
        for (let i = 0; i <= String(animation.period.year).length - 1; i++) {
        
            // using substr, start from first digit (leftmost)
            let digit = animation.element(year, "div", "digit", 
                String(animation.period.year).substr(i, 1));
            digit.style.top = (0 - (digit.clientHeight * 2)) + "px";
            
            // (adding each digit to end of timeline with animation)
            // .to( target:Object, duration:Number, lets:Object, position:* ) : *
            timeline.to(digit, 0.5, {
                top: 0,
                opacity: 1,
                ease: Bounce.easeOut
            });
        }
        return year;
    },
    animate: () => {
        // make year display timeline, year reflection timeline, countdown controls element
        let year_display = animation.year("year year_display");
        let year_reflection = animation.year("year year_reflection");
        let controls = animation.element(animation.newYear, "div", "controls");

        // make countdown elements
        let days = animation.element(controls, "div", "control days");
        let hours = animation.element(controls, "div", "control hours");
        let minutes = animation.element(controls, "div", "control minutes");
        let seconds = animation.element(controls, "div", "control seconds");

        // set countdown elements to newest generated
        animation.controls = {
            controls: controls,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

        // refresh animation content (updated time) for countdown controls
        animation.render();

        // make fullTimeline to keep track of triangles falling
        let fullTimeline = new TimelineMax();

        // create parent div triangles for each triangle
        let triangles = animation.element(year_display, "div", "triangles");
        // each triangle is stored in here
        let triangleStorage = [];

        // make 50 triangle animations that will loop indefinitely
        for (let i = 0; i < 50; i++) {

            // repeat indefinitely
            let timeline = new TimelineMax({ repeat: -1 });

            // make triangle child of triangles
            let triangle = animation.element(triangles, "div", "triangle");
            triangle.style.top = -50 + "px";

            // generate random time, duration, direction for triangle falling
            let time = animation.range(0, 100) / 100;
            let duration = 1;
            let direction = animation.range(1, 2) == 1 ? -1 : 1;
            
            // set triangle properties to timeline
            timeline
                .set(triangle, { scale: animation.range(10, 20) / 10 }, time)
                .to(triangle, duration * 0.5, { opacity: 1 }, time)
                .to(triangle, duration, {
                    top: "200%",
                    rotationZ: animation.range(180, 360) * direction,
                    rotationX: animation.range(180, 360) * direction
                }, time)
                .to(triangle, duration * 0.5, {
                    opacity: 0
                }, time + (duration * 0.5));
            
            // add timeline to fullTimeline
            fullTimeline.add(timeline, 0);
            // store triangles
            triangleStorage.push(triangle);
        }

        // set location of triangles falling proportional to div of yearMain
        let previousWidth = 0;
        let checkWidth = () => {
            if (Math.abs(previousWidth - year_display.clientWidth) > 1) {
                for (let i = 0; i < triangleStorage.length; i++) {
                    triangleStorage[i].style.left = (-5 + animation.range(0, year_display.clientWidth)) + "px";
                }
                previousWidth = year_display.clientWidth;
            }
            setTimeout(checkWidth, 100);
        }
        checkWidth();

        // TimelineMax() obj that will be the animation
        return new TimelineMax()
            .to(days, 0.5, { top: 0, opacity: 1 }, 0)
            .to(hours, 0.5, { top: 0, opacity: 1 }, 0.25)
            .to(minutes, 0.5, { top: 0, opacity: 1 }, 0.5)
            .to(seconds, 0.5, { top: 0, opacity: 1 }, 0.75)
            .set(triangles, { opacity: 1 }, 3)
            .add(fullTimeline, 3)
        ;
    },
    // if digit is single, append '0' before it to make it 2 digits
    plural: (property) => {
        let period = animation.period;
        if (String(period[property]).length <= 1) {
            period[property] = "0" + period[property];
        }
        return Number(period[property]) > 1 ? 
            period[property] + " " + property : 
            period[property] + " " + property.substr(0, property.length - 1);
    },
    // check if digit needs a '0' using .plural() before rendering
    render: () => {
        animation.controls.seconds.innerHTML = animation.plural("seconds");
        animation.controls.minutes.innerHTML = animation.plural("minutes");
        animation.controls.hours.innerHTML = animation.plural("hours");
        animation.controls.days.innerHTML = animation.plural("days");
        requestAnimationFrame(animation.render);
    }
};

animation.animate();
