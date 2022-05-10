/* global AFRAME */
AFRAME.registerComponent('info-panel', {
    init: function() {
        var buttonEls = document.querySelectorAll('.menu-button');
        var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

        this.bgimg = document.querySelector('#bgimg');
        this.artImageEl;
        this.artTitleEl = document.querySelector('#artTitle');
        this.artAuthorEl = document.querySelector('#artAuthor');
        this.artDescriptionEl = document.querySelector('#artDescription');

        this.artInfo = {
            erosioncastsButton: {
                title: 'EROSION CASTS',
                author: 'Nasser Al Zayani',
                backgroundimg: '#erosioncastsBackground',
                imgEl: document.querySelector('#erosioncastsartImage'),
                description: 'Erosion Casts looks into the ephemerality of natural environments as they are constantly shifting, mostly imperceptibly. Focusing Jebel Jais, the highest mountain in the UAE, Alzayani’s work cements a specific part of Jebel Jais in a specific time as a way to document its erosion. The work intervenes by illustrating and interacting with the environment by removing spatial-temporal memory through the casts and documentation.\nAlzayani’s Erosion Casts came into being after extensively documenting and taking plaster casts of Jebel Jais. Using the skills and concepts he studied during his architecture undergraduate degree, his documentation of a specific time and place on Jebel Jais comes to life, with the plaster cast earth documenting the rapid and slow changes of the natural environment. The final presentation consists of documentary photographs, spatial illustrations, and the plaster cast earth taken from Jebel Jais.\nIn his work, Alzayani utilizes research-driven documentation of specific times, spaces, and places through text and images, as well as found and cast objects gathered. Incorporating themes of factual and fictional archaeology, his most recent work explores alternative narratives of the collective experience. As his involvement is, according to him, “one who is collecting and presenting a narrative, through the lens of the archaeologist, the archivist, the curator or the historian”, he believes that it is difficult to frame himself as the sole creator of his work as it is so dependent on his surroundings.'
            },
            wheatfieldButton: {
                title: 'WHEATFIELD - A CONFRONTATION',
                author: 'Agnes Denes',
                backgroundimg: '#wheatfieldBackground',
                imgEl: document.querySelector('#wheatfieldartImage'),
                description: 'Agnes Denes, known for her use of non-traditional materials to create her pieces, planted a two-acre wheatfield in a landfill created after the construction of the Twin Towers as an act against global warming. This wheatfield was planted and harvested in summer of 1982. Denes deliberately picked a location close to Wall Street and the World Trade Center, where stock exchange of goods such as wheat were traded, to illustrate the world’s skewed priorities and to generate irony.\nTwo hundred truckloads of dirt were delivered, and 285 furrows were excavated and cleared of rocks and debris by hand. The field was mowed, weeded, fertilized, and treated against mildew fungus for four months, and an irrigation system was installed. On August 16, the crop was harvested, yielding over 1000 pounds of robust, golden wheat. The gathered grain was shown in “The International Art Show for the End of World Hunger” exhibition in twentyeight locations across the world. The seeds were then taken away by people who planted them in different parts of the globe.\n Agnes Denes is a Hungarian conceptual artist residing in New York. She is known for works in a variety of media, ranging from poetry and philosophical texts to intricate drawings, sculptures, and famous land art installations like Wheatfield – A Confrontation. Agnes Denes is also renowned for her innovative use of metallic inks and other non-traditional materials in generating a vast collection of wonderfully produced drawings and prints that document her discoveries in mathematics, philosophy, geography, physics, and other fields.'
            },
            bluedTreesButton: {
                title: 'BLUED TREES SYMPHONY',
                author: 'Aviva Rahmani',
                backgroundimg: '#bluedTreesBackground',
                imgEl: document.querySelector('#bluedTreesartImage'),
                description: 'Blued Trees Symphony is a spatial and acoustic outdoor installation spanning different areas of North America. Covering many kilometers of pipeline expansion, this piece consists of blue trees that are GPS located, creating an aerial music score that is copyrighted, therefore protecting the land from further pipeline development.\nThe blue vertical sine wave was painted manually onto each tree with the paint consisting of an ultramarine blue and buttermilk mixture that enhances moss growth. The musical piece the trees create was composed by Aviva Rahmani in 2015 in reaction to the Alognquin pipeline, connecting the Blue Mountain Reservation to the Indian Point nuclear facility. Due to this overture, the responsible pipeline companies were handed a cease-anddesist notice to protect the copyrighted work.\nAvani Rahmani is a transdisciplinary art activist focusing much of her work on combating environmental injustice and ecocide with many of her projects take legendary scales, sometimes spanning continent wide. When she is not creating cutting edge art, she teaches and leads others to a renewed focus on ecological restoration. Blued Trees Symphony is an embodiment of her research on trigger point theory as aesthetic activism.'
            },
            terraformsButton: {
                title: 'TERRAFORMS',
                author: 'Jamie North',
                backgroundimg: '#terraformsBackground',
                imgEl: document.querySelector('#terraformsartImage'),
                description: 'These sculptures constructed by Jamie North in 2014 are made from cement, blast furnace slags, marble waste, limestone, coal ash, organic matter, and various Australian plants. Due to the nature of plants and their evolution, these sculptures become their own little ecosystem; a new ecosystem made from old debris. North’s work evokes the aesthetics of mineral extraction and industrial waste, cultivated garden traditions, and the interaction between nature and architecture through its materials and historical ambiguity. Human interventions on Australia’s terrain, both positive and negative, have a significant impact on his work. The artist has referred to his sculptures as ‘terraforms,’ a sci-fi phrase for landscapes that have been altered to support human life.\nWorks like Terraforms came about because of the effect the area Jamie North grew up in had on him. Having spent his childhood near an industrial town in Newcastle, that is where he encountered the many materials he currently uses such as slag. Slag, a combination of metal oxides and silicon dioxide left over after steel has been separated from its raw ore, is a major by-product of the steel industry. North first discovered slag as a youngster, and it has since been an important aesthetic and material component of his work. North’s ongoing interaction with plants was another key impact on his work. North was raised in a coastal bushland region that was gradually cleared over the course of his childhood. After a trip to Tuvalu, North decided that his creative inquiries will be based on plants, native Australian plants. It was then that North decided to create an intersection between the manmade and the natural be it through photography or sculptures.'
            },
            oasisButton: {
                title: 'OASIS',
                author: 'Guerra de La Paz',
                backgroundimg: '#oasisBackground',
                imgEl: document.querySelector('#oasisartImage'),
                description: 'In this installation, trashed second-hand garments have been transformed into a scenic view of an oasis complete with flowers, trees, and “water” beds. Due to the sheer size of the installation and the addition of auditory forest like sounds, it puts the audience in a space in which they are forced to reflect on their garment consumption and waste as they walk around this oasis made from familiar waste.\nGuerra de la Paz, a collaboration between Miami based Cuban artists Alain Guerra and Neraldo de la Paz, for the past couple of decades have been creating various installations that deliver strong political and environmental messages. Most of these installations are created using salvaged clothes from trash cans of companies that ship second-hand clothing. They mainly investigate the expressive potential of abandoned fabrics, resulting in a stunning collection of dynamic sculptures and tactile installations.\nGuerra de la Paz started their collaborative work by creating collages out of magazine cut outs; however, after being introduced to a garments warehouse owner, their focus shifted from using magazines as their raw material to clothing. Little Haiti, a Miami neighborhood, has long been a hub for collecting and storing pepe, abandoned clothing that is shipped by the bundle to Haiti and other parts of the world, to be resold in marketplaces. It is there that the warehouse owner gave Guerra de la Paz permission to go through the mounds of garments and remove the things that interested them most. In addition, the two artists found that garments were more intriguing than traditional media because, to them, used garments preserve the past and leave traces of human existence that live on through creative reuse.'
            },
            acidrainButton: {
                title: 'ACID RAIN: SHIELDS',
                author: 'Bright Ugochukwu Eke',
                backgroundimg: '#acidrainBackground',
                imgEl: document.querySelector('#acidrainartImage'),
                description: 'After Eke suffered from skin infection due to acid rain caused by oil companies’ pollution in his homeland, Nigeria, he has focused on using water as his medium as it links all humans and their environments. In the same vein, Shields raises awareness about the impact petroleum refineries have on drinking water in Nigeria through its exposure to acid rain. In order to consume noncontaminated water, packaged potable water in plastic bags is sold all throughout the country, often ending up as litter after being consumed. Using the indicators of this issue as the material for his work, Eke’s acid rain coats and umbrellas do not only draw attention acid rain and its impact, including the waste of plastic, but the coats and umbrellas themelves become a means to protect oneself from environmental hazards. In this way, the work becomes emergency survival gear.\nIn order to create these shields, Eke and others scoured the streets for plastic bag that held water. When creating the shields the bags were not sanitized, but were instead kept in their natural state of being dirty and appearing as litter to hint at their past consumption and waste. Essential to Shields was the engagement of the local community who helped create the work, leading to discussions about the state of Nigeria’s acid rain and its culprits. \nShields is inidicative of Eke’s process and art philosophy. His works are generally site-specific, integrating physical and social environments by using materials found locally and working with locals. Utilizing found materials, much of his work recycles the plastic and waste, making his work as much about the environment as from the environment.'
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
        bgimg.setAttribute('src', artInfo.backgroundimg);
        // bgimg = this.artInfo.backgroundimg;
        console.log(bgimg, artInfo.backgroundimg);


    },

    onBackgroundClick: function(evt) {
        this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.visible = false;
        this.fadeBackgroundEl.object3D.visible = false;
    }
});