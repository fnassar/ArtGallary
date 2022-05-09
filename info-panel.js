/* global AFRAME */
AFRAME.registerComponent('info-panel', {
    init: function() {
        var buttonEls = document.querySelectorAll('.menu-button');
        var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

        this.artImageEl;
        this.artTitleEl = document.querySelector('#artTitle');
        this.artAuthorEl = document.querySelector('#artAuthor');
        this.artDescriptionEl = document.querySelector('#artDescription');

        this.artInfo = {
            erosioncastsButton: {
                title: 'erosioncasts',
                author: 'tba',
                imgEl: document.querySelector('#erosioncastsartImage'),
                description: 'Based on the 1952 novel The Borrowers by Mary Norton, an English author of children\'s books, about a family of tiny people who live secretly in the walls and floors of a typical household, borrowing items from humans to survive.'
            },
            wheatfieldButton: {
                title: 'Wheat Field',
                author: 'tba',
                imgEl: document.querySelector('#wheatfieldartImage'),
                description: 'The Wind Rises is a fictionalised biographical film of Jiro Horikoshi (1903, 1982), designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II. The film is adapted from Miyazaki\'s manga of the same name, which was in turn loosely based on both the 1937 novel The Wind Has Risen by Tatsuo Hori and the life of Jiro Horikoshi.'
            },
            bluedTreesButton: {
                title: 'blued Trees (2003)',
                author: 'tba',
                imgEl: document.querySelector('#bluedTreesartImage'),
                description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of bluedTrees (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of bluedTrees (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of bluedTrees (Nara), a goldfish who escapes from the</br> ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of bluedTrees (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
            },
            terraformsButton: {
                title: 'Terraforms (2003)',
                author: 'tba',
                imgEl: document.querySelector('#bluedTreesartImage'),
                description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of bluedTrees (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
            },
            oasisButton: {
                title: 'Oasis (2003)',
                author: 'tba',
                imgEl: document.querySelector('#bluedTreesartImage'),
                description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of bluedTrees (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
            },
            acidrainButton: {
                title: 'acid rain (2003)',
                author: 'tba',
                imgEl: document.querySelector('#bluedTreesartImage'),
                description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of bluedTrees (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
            }

        };

        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onBackgroundClick = this.onBackgroundClick.bind(this);
        this.backgroundEl = document.querySelector('#background');
        for (var i = 0; i < buttonEls.length; ++i) {
            buttonEls[i].addEventListener('click', this.onMenuButtonClick);
        }
        this.backgroundEl.addEventListener('click', this.onBackgroundClick);
        this.el.object3D.renderOrder = 9999999;
        this.el.object3D.depthTest = false;
        fadeBackgroundEl.object3D.renderOrder = 9;
        fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    },

    onMenuButtonClick: function(evt) {
        var artInfo = this.artInfo[evt.currentTarget.id];

        this.backgroundEl.object3D.scale.set(1, 1, 1);

        this.el.object3D.scale.set(1, 1, 1);
        if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
        this.el.object3D.visible = true;
        this.fadeBackgroundEl.object3D.visible = true;

        if (this.artImageEl) { this.artImageEl.object3D.visible = false; }
        this.artImageEl = artInfo.imgEl;
        this.artImageEl.object3D.visible = true;

        this.artTitleEl.setAttribute('text', 'value', artInfo.title);
        this.artAuthorEl.setAttribute('text', 'value', artInfo.author);
        this.artDescriptionEl.setAttribute('text', 'value', artInfo.description);
        // this.artDescriptionEl.width = "10";
        console.log(this.artDescriptionEl);
    },

    onBackgroundClick: function(evt) {
        this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.visible = false;
        this.fadeBackgroundEl.object3D.visible = false;
    }
});