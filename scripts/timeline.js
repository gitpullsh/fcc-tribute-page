var timelineHistory = {
  y1815: {
    a1815: {
      title: 'Augusta Ada King-Noel, Countess of Lovelace',
      resume: '10 December 1815 - London, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 - 27 November 1852 Marylebone (aged 36), London, England 🏴',
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/800px-Ada_Lovelace_portrait.jpg'
    },
    b1816: {
      title: 'Early life',
      resume: "On 16 January 1816 Ada's mother, Annabella, at Byron's behest, left for her parents' home at Kirkby Mallory, taking one-month-old Ada with her. Although English law at the time gave fathers full custody of their children in cases of separation, Byron made no attempt to claim his parental rights but did request that his sister keep him informed of Ada's welfare",
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/589px-Miniature_of_Ada_Byron.jpg'
    }
  },
  y1820: {
    a1822: {
      title: 'Ada famous in Victorian society',
      resume: "[Image] Ada, aged seven, by Alfred d'Orsay, 1822, Somerville College, Oxford.",
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace_child_portrait_Somerville_College.jpg'
    },
    b1824: {
      title: 'Ada famous in Victorian society',
      resume: 'Byron did not have a relationship with his daughter, and never saw her again. He died in 1824 when she was eight years old.',
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace_child_portrait_Somerville_College.jpg'
    },
    c1828: {
      title: 'Looking forward to Fly',
      resume: `At age 12 this future "Lady Fairy", as Charles Babbage affectionately called her, decided she wanted to fly. Ada went about the project methodically, thoughtfully, with imagination and passion. Her first step, in February 1828, was to construct wings. She investigated different material and sizes. She considered various materials for the wings: paper, oilsilk, wires, and feathers. She examined the anatomy of birds to determine the right proportion between the wings and the body.`,
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace_child_portrait_Somerville_College.jpg'
    },
    d1829: {
      title: 'Ada was often ill, beginning in early childhood.',
      resume: "In June 1829, she was paralysed after a bout of measles. She was subjected to continuous bed rest for nearly a year, which may have extended her period of disability.",
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace_child_portrait_Somerville_College.jpg'
    }
  },
  y1830: {
    a1831: {
      title: 'By 1831, she was able to walk with crutches.',
      resume: `She decided to write a book, Flyology, illustrating, with plates, some of her findings. She decided what equipment she would need; for example, a compass, to "cut across the country by the most direct road", so that she could surmount mountains, rivers, and valleys. Her final step was to integrate steam with the "art of flying".`,
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Byron_aged_seventeen_(1832).jpg'
    },
    b1833: {
      title: 'Ada had an affair with a tutor and, after being caught, tried to elope with him.',
      resume: "The tutor's relatives recognised her and contacted her mother. Annabella and her friends covered the incident up to prevent a public scandal.",
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Byron_aged_seventeen_(1832).jpg'
    },
    c1835: {
      title: 'Wedding',
      resume: "On 8 July 1835, she married William, 8th Baron King, becoming Lady King. They spent their honeymoon at Worthy Manor in Ashley Combe near Porlock Weir, Somerset. They had three children: Byron (born 12 May 1836); Anne Isabella (called Annabella; born 22 September 1837); and Ralph Gordon (born 2 July 1839).", 
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/William_King_Noel_(H_Hering_NPG_x197973).jpg'
    },
    d1837: {
      title: 'A tedious and suffering illness, which took months to cure',
      resume: `Immediately after the birth of Annabella, Lady King experienced "a tedious and suffering illness, which took months to cure."`,
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/William_King_Noel_(H_Hering_NPG_x197973).jpg'
    }
  },
  y1840: {
    a1841: {
      title: 'Lovelace and Medora Leigh',
      resume: `In 1841 Lovelace and Medora Leigh (the daughter of Lord Byron's half-sister Augusta Leigh) were told by Ada's mother that her father was also Medora's father. On 27 February 1841, Ada wrote to her mother: "I am not in the least astonished. In fact, you merely confirm what I have for years and years felt scarcely a doubt about, but should have considered it most improper in me to hint to you that I in any way suspected."`,
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace.jpg'
    },
    b1842: {
      title: "Babbage's newest proposed machine, the Analytical Engine.",
      resume: `During a nine-month period in 1842–43, Lovelace translated the Italian mathematician Luigi Menabrea's article on Babbage's newest proposed machine, the Analytical Engine. With the article, she appended a set of notes. The notes are around three times longer than the article itself and include (in Section G), in complete detail, a method for calculating a sequence of Bernoulli numbers with the Engine, which could have run correctly had Babbage's Analytical Engine been built. (Only his Difference Engine has been built, completed in London in 2002.) Based on this work Lovelace is now widely considered the first computer programmer and her method is recognised as the world's first computer program.`,
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Diagram_for_the_computation_of_Bernoulli_numbers.jpg'
    }
  },
  y1850: {
    a1852: {
      title: 'Final Years',
      resume: 'In 1852 at the age of 36, Ada Lovelance died of uterine cancer.',
      img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg'
    }
  }
};

var timeline = {
  year: timelineHistory['y1815'],
  yearString: 'y1815',
  subYear: 'a1815'
};

var timelineYears = () => (
  Object.keys(timelineHistory)
);

var timelineSubYears = year => (
  Object.keys(timelineHistory[year])
);

function setTimeline(year, subYear) {
  if (year) {
    timeline.year = timelineHistory[year];
    timeline.yearString = year;
  }

  if (subYear) {
    timeline.subYear = subYear;
  } else {
    timeline.subYear = timelineSubYears(year)[0];
  }
}

function updateTimeline() {
  const current = timeline.year[timeline.subYear];

  const elTitle = document.getElementById('timeline-title');
  elTitle.innerText = current.title;

  const elResume = document.getElementById('timeline-resume');
  elResume.innerText = current.resume;

  const elImage = document.getElementById('timeline-image');
  elImage.setAttribute('src', current.img);

  const elTimeline = document.getElementById('timeline');
  elTimeline.style.backgroundImage = `url(${current.img})`;

  const elTimelineYears = document.getElementsByClassName('timeline-year');
  for (let i = 0; i < elTimelineYears.length; i++) {
    if (elTimelineYears.item(i).innerText === timeline.yearString.substr(1, 5)) {
      elTimelineYears.item(i).className = 'timeline-year current';
      continue;
    }
    elTimelineYears.item(i).className = 'timeline-year';
    continue;
  }

  const elTimelineSubYears = document.getElementById('subyears-list');
  timelineSubYears(timeline.yearString).map(sy => {
    const subYear = document.createElement('li');
    subYear.className = 'timeline-year';
    subYear.innerText = sy.substr(1, 5);
    subYear.addEventListener('click', () => {
      setTimeline(null, sy);
      updateTimeline();
    });
    elTimelineSubYears.appendChild(subYear);
  });
}

(function(){
  const elYears = document.getElementById('years-list');
  timelineYears().map(y => {
    let timelineYear = document.createElement('li');
    timelineYear.className = `timeline-year`;
    timelineYear.innerText = y.substr(1, 5);
    timelineYear.addEventListener('click', () => {
      setTimeline(y);
      updateTimeline();
    });
    elYears.appendChild(timelineYear);
  });

  const elSubYears = document.getElementById('subyears-list');
  timelineSubYears(timeline.yearString).map(y => {
    let timelineSubYear = document.createElement('li');
    timelineSubYear.className = 'timeline-year';
    timelineSubYear.innerText = y.substr(1, 5);
    timelineSubYear.addEventListener('click', () => {
      setTimeline(null, y);
      updateTimeline();
    });
    elSubYears.appendChild(timelineSubYear);
  });

  updateTimeline();
})();
