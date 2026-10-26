
/*
  ALBI'S BIRTHDAY SURPRISE WEBSITE

  Personalise this file before publishing:
  1. Replace the memory prompts with your real memories.
  2. Edit the reasons and birthday letter if you want.
  3. Add your photos to the gallery.
  4. Personalise the final surprise message.

  This website needs no backend and has no music.
*/

const memories = [
  {
    title: "How our story began",
    prompt: "[Write how we met, or the beginning of our story here.]",
    label: "THE BEGINNING"
  },
  {
    title: "One of my favourite memories",
    prompt: "[Add a real moment with him that you still think about and smile.]",
    label: "A FAVOURITE"
  },
  {
    title: "When you made me feel loved",
    prompt: "[Describe a real moment when his care or support meant a lot to you.]",
    label: "YOU & ME"
  },
  {
    title: "Our funniest little moment",
    prompt: "[Add an inside joke or funny moment only the two of you understand.]",
    label: "THE LAUGHTER"
  },
  {
    title: "Something we got through together",
    prompt: "[Write about a challenge you faced together and what it taught you. Share only what feels comfortable.]",
    label: "GROWING TOGETHER"
  },
  {
    title: "A memory that always makes me smile",
    prompt: "[Add another real memory, small detail, message, or moment you treasure.]",
    label: "STILL SMILING"
  },
  {
    title: "More memories waiting for us",
    prompt: "There are still so many little moments I hope we get to collect. I'm looking forward to finding out what they will be.",
    label: "WHAT'S NEXT"
  }
];

const reasons = [
  {
    title: "Your support",
    message: "I appreciate the ways you show up for me and remind me that I don't have to figure everything out alone."
  },
  {
    title: "The person you are",
    message: "I love getting to know you more, including the little parts of your personality that make you unmistakably you."
  },
  {
    title: "Your effort",
    message: "The way you put in effort, even when things are not easy, means a lot to me."
  },
  {
    title: "The comfort of you",
    message: "There is something special about having someone who feels familiar and important in my world. I'm grateful you're here."
  },
  {
    title: "Your dreams",
    message: "I love that you have things you want to achieve, and I want to cheer you on as you work towards them."
  }
  {
    title: "The little things",
    message: "Sometimes it's the small gestures and ordinary moments that stay with me the longest."
  },
  {
    title: "Your Kindness",
    message: "You have such a kind heart and it shows in the way your care or me ."
  },
  {
    title: "Your place in my life",
    message: "You have become someone I care about deeply, and I'm thankful our paths crossed."
  },
  {
    title: "Your laughs",
    message: "The only thing I love more than your smile is your laugh. The way that your eyes literally disappear when you laugh."
  },
  {
    title: "Your potential",
    message: "I believe there is so much you can do, and I hope you never stop giving yourself the chance to grow."
  },
  {
    title: "What we can build",
    message: "I love the thought of creating a relationship that keeps making room for honesty, kindness, trust, and joy."
  },
  {
    title: "Because it's you",
    message: "Beyond a list of reasons, I love you as a person. And I'm glad I get to say that to you today."
  }
];

const birthdayLetter = [
  "Happy birthday, Albi. ❤️ I wish I could put everything I feel into the right words, but I hope this little corner of the internet gives you a glimpse of how much you mean to me.",

  "I'm grateful to have you in my life. Thank you for the care, support, and effort you've shown me. I don't take those things for granted, even when I may not always know how to express how much they mean to me.",

  "I know we are not perfect, and our journey will not always be perfect either. We're learning as we go, figuring things out, and growing as individuals and as a couple. What matters to me is that we keep making room for honest conversations, understanding, and choosing to treat each other with care.",

  "As you step into another year, I want you to know that I believe in you. I hope you keep going after the things that matter to you, even when the road feels slow or uncertain. I hope you recognise your own progress and give yourself credit for how far you've come. I want to celebrate your wins, encourage you through the difficult parts, and see you become the man you want to be.",

  "My prayer is that this new year brings you good health, peace of mind, wisdom, joy, meaningful opportunities, and success in the things you work towards. May God guide you, protect you, strengthen you when life feels heavy, and surround you with people who genuinely want to see you do well.",

  "And for us, I hope we keep growing with more laughter, more memories, more understanding, and more reasons to be thankful for each other. I look forward to the little things still ahead of us just as much as the big ones.",

  "Happy birthday, my Albi. I hope today reminds you that you are loved, appreciated, and worth celebrating. I'm rooting for you, today and in the days to come."
];

const prayers = [
  {
    icon: "✧",
    title: "Health & long life",
    text: "May God bless you with good health, strength, and many more years to live fully and meaningfully."
  },
  {
    icon: "♡",
    title: "Peace of mind",
    text: "May your heart find rest, your mind find clarity, and your days hold genuine happiness even in ordinary moments."
  },
  {
    icon: "✦",
    title: "Wisdom & discernment",
    text: "May God guide your decisions and give you the wisdom to recognise what is right for you and the courage to act on it."
  },
  {
    icon: "↗",
    title: "Your goals & ambitions",
    text: "May your efforts bear fruit. I pray for progress in your work, studies, plans, and every good thing you are working towards."
  },
  {
    icon: "◇",
    title: "Provision & open doors",
    text: "May you find opportunities, financial stability, and honest ways to provide for yourself and the people you care about."
  },
  {
    icon: "☼",
    title: "Protection & favour",
    text: "May God watch over you, guide your steps, and lead you towards people and places that help you grow."
  },
  {
    icon: "❋",
    title: "Strength in hard seasons",
    text: "When life feels difficult, may you find the strength to keep going, the patience to take things one step at a time, and support when you need it."
  },
  {
    icon: "∞",
    title: "Good people & growth",
    text: "May you meet sincere friends, learn from meaningful experiences, and keep becoming a man you are proud to be."
  }
];

const futurePlans = [
  {
    icon: "♡",
    title: "Make more memories",
    text: "Collect more little moments that become our favourite stories to tell."
  },
  {
    icon: "✦",
    title: "Celebrate more birthdays",
    text: "Find new ways to make each other's special days feel loved and remembered."
  },
  {
    icon: "↗",
    title: "Cheer each other on",
    text: "Keep supporting each other's goals, even when our paths look different."
  },
  {
    icon: "⌁",
    title: "Explore somewhere new",
    text: "Have new places, new food, and new experiences to look back on together."
  },
  {
    icon: "☼",
    title: "Laugh at the little things",
    text: "Never get so busy that we forget to be playful and enjoy the ordinary days."
  },
  {
    icon: "♡",
    title: "Keep growing together",
    text: "Build more understanding, trust, patience, and the kind of love that keeps learning."
  }
];

/*
  ADD YOUR PHOTOS HERE.

  1. Inside your project folder, create a folder named assets.
  2. Inside assets, create another folder named images.
  3. Put your photos in that images folder.
  4. Replace the empty src values below with the photo paths.

  Example:
  {
    src: "assets/images/us-1.jpg",
    caption: "My favourite smile",
    alt: "Albi smiling outdoors"
  }

  Use the exact file name and extension of your photo.
*/

const photos = [
  {
    src: "assets/images/whatsapp-image-2026-10-25-at-06.37.11.jpeg",
    caption: "A favourite photo",
    alt: "Add an accurate description of your photo here"
  },
  {
    src: "assets/images/whatsapp-image-2026-10-25-at-07.42.28.jpeg",
    caption: "One for the memories",
    alt: "Add an accurate description of your photo here"
  },
  {
    src: "assets/images/WhatsApp Video 2026-10-25 at 06.37.26.mp4",
    caption: "Just you being you",
    alt: "Add an accurate description of your photo here"
  },
  {
    src: "",
    caption: "A little moment",
    alt: "Add an accurate description of your photo here"
  },
  {
    src: "",
    caption: "My person",
    alt: "Add an accurate description of your photo here"
  },
  {
    src: "",
    caption: "More memories to come",
    alt: "Add an accurate description of your photo here"
  }
];

/* PERSONALISE THIS FINAL MESSAGE BEFORE SHARING THE WEBSITE. */
const finalMessage = [
  "Adekola, if there's one thing I hope you carry away from this little surprise, it's this: you matter to me more than a webpage could ever explain.",

  "I hope this next chapter brings you closer to the things you've been praying and working for. I hope you laugh often, feel proud of yourself, find peace when you need it, and remember that you don't have to have everything figured out all at once.",

  "And we will visit Zanzibar on one of your birthdays soon .",

  "Thank you for being you, and for being part of my life. Happy birthday, my love. I'm rooting for you, I'm praying for you, and I'm so glad I get to celebrate you. ❤️"
];

/* HELPER FUNCTIONS */

const $ = (selector, root = document) => root.querySelector(selector);
const intro = $("#intro");
const siteShell = $("#site-shell");

/* OUR STORY */

function renderMemories() {
  $("#memory-list").innerHTML = memories.map((item, i) => `
    <article class="memory-card reveal">
      <span class="memory-dot" aria-hidden="true"></span>
      <div class="memory-content">
        <span class="memory-index">${escapeHTML(item.label || `MEMORY ${String(i + 1).padStart(2, "0")}`)}</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.prompt)}</p>
      </div>
    </article>
  `).join("");
}

/* REASONS I LOVE YOU */

function renderReasons() {
  $("#reason-list").innerHTML = reasons.map((item, i) => `
    <button class="reason-card reveal" type="button" aria-expanded="false">
      <span class="reason-card-inner">
        <span class="reason-number">NOTE ${String(i + 1).padStart(2, "0")} / ♥</span>
        <span class="reason-title">${escapeHTML(item.title)}</span>
        <span class="reason-hint">Tap to open ↗</span>
        <span class="reason-message" hidden>${escapeHTML(item.message)}</span>
      </span>
    </button>
  `).join("");

  $("#reason-list").querySelectorAll(".reason-card").forEach(card => {
    card.addEventListener("click", () => {
      const isOpen = card.getAttribute("aria-expanded") === "true";

      card.setAttribute("aria-expanded", String(!isOpen));

      const message = $(".reason-message", card);
      message.hidden = isOpen;

      $(".reason-hint", card).textContent = isOpen
        ? "Tap to open ↗"
        : "A little reminder for you ♥";
    });
  });
}

/* PHOTO GALLERY */

function renderPhotos() {
  $("#photo-grid").innerHTML = photos.map((photo, i) => {
    const hasPhoto = photo.src && photo.src.trim();

    const inner = hasPhoto
      ? `<img src="${escapeAttr(photo.src)}" alt="${escapeAttr(photo.alt)}" loading="lazy">`
      : `<span class="photo-placeholder">
           <span aria-hidden="true">♡</span>
           <strong>Your photo goes here</strong>
           <small>Add image ${i + 1} in script.js</small>
         </span>`;

    return `
      <button
        class="photo-card reveal"
        type="button"
        style="--tilt:${i % 2 === 0 ? "-1.2" : "1.2"}deg"
        ${hasPhoto
          ? `data-photo="${escapeAttr(photo.src)}"
             data-alt="${escapeAttr(photo.alt)}"
             data-caption="${escapeAttr(photo.caption)}"
             aria-label="View photo: ${escapeAttr(photo.caption)}"`
          : `disabled aria-label="Photo placeholder: ${escapeAttr(photo.caption)}"`
        }>
        <span class="photo-image-wrap">${inner}</span>
        <span class="photo-caption">${escapeHTML(photo.caption)}</span>
      </button>
    `;
  }).join("");

  $("#photo-grid")
    .querySelectorAll(".photo-card[data-photo]")
    .forEach(card => {
      card.addEventListener("click", () => openLightbox(card));
    });
}

/* PRAYERS */

function renderPrayers() {
  $("#prayer-list").innerHTML = prayers.map(item => `
    <article class="prayer-card reveal">
      <span class="prayer-icon" aria-hidden="true">${escapeHTML(item.icon)}</span>
      <div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.text)}</p>
      </div>
    </article>
  `).join("");
}

/* FUTURE HOPES */

function renderFuture() {
  $("#future-list").innerHTML = futurePlans.map(item => `
    <article class="future-card reveal">
      <span class="future-symbol" aria-hidden="true">${escapeHTML(item.icon)}</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.text)}</p>
    </article>
  `).join("");
}

/* LOVE LETTER AND FINAL MESSAGE */

function renderLetter() {
  $("#birthday-letter").innerHTML = birthdayLetter
    .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");

  $("#final-message-copy").innerHTML = finalMessage
    .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");
}

/* TEXT SAFETY HELPERS */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function escapeAttr(value) {
  return escapeHTML(value);
}

/* OPENING SCREEN */

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function showSite() {
  intro.classList.add("intro-leaving");

  window.setTimeout(() => {
    intro.hidden = true;
    siteShell.hidden = false;

    document.body.classList.remove("locked");

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth"
    });

    setupReveal();
  }, reduceMotion ? 0 : 380);
}

$("#open-surprise").addEventListener("click", showSite);

/* REPLAY THE SURPRISE */

$("#replay-surprise").addEventListener("click", () => {
  siteShell.hidden = true;
  intro.hidden = false;

  $("#final-message").hidden = true;
  $("#reveal-final").setAttribute("aria-expanded", "false");
  $(".final-card").classList.remove("opened");

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "auto" : "smooth"
  });
});

/* REVEAL SECTIONS AS THEY ENTER THE SCREEN */

function setupReveal() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");

  if (!("IntersectionObserver" in window) || reduceMotion) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(element => observer.observe(element));
}

/* FINAL ENVELOPE SURPRISE */

$("#reveal-final").addEventListener("click", () => {
  const message = $("#final-message");

  if (!message.hidden) return;

  message.hidden = false;

  $("#reveal-final").setAttribute("aria-expanded", "true");
  $(".final-card").classList.add("opened");

  makeConfetti();

  message.focus({ preventScroll: true });

  message.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "nearest"
  });
});

/* HEART CONFETTI */

function makeConfetti() {
  const layer = $("#confetti-layer");
  layer.replaceChildren();

  if (reduceMotion) return;

  const symbols = ["♥", "♡", "✦", "✧"];

  for (let i = 0; i < 24; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.textContent = symbols[i % symbols.length];

    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.9}s`;
    piece.style.setProperty(
      "--drift",
      `${Math.random() * 100 - 50}px`
    );

    layer.appendChild(piece);
  }

  window.setTimeout(() => layer.replaceChildren(), 4000);
}

/* PHOTO LIGHTBOX */

const lightbox = $("#lightbox");
const lightboxImage = $("#lightbox-image");
let lastFocusedPhoto = null;

function openLightbox(card) {
  lastFocusedPhoto = card;

  lightboxImage.src = card.dataset.photo;
  lightboxImage.alt = card.dataset.alt || "";

  $("#lightbox-caption").textContent = card.dataset.caption || "";

  lightbox.hidden = false;
  $("#lightbox-close").focus();

  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";

  document.body.style.overflow = "";

  if (lastFocusedPhoto) {
    lastFocusedPhoto.focus();
  }
}

$("#lightbox-close").addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }

  if (event.key === "Tab" && !lightbox.hidden) {
    const closeButton = $("#lightbox-close");

    if (event.shiftKey && document.activeElement === closeButton) {
      event.preventDefault();
      closeButton.focus();
    }
  }
});

/* BUILD ALL THE CONTENT WHEN THE PAGE LOADS */

renderMemories();
renderReasons();
renderPhotos();
renderPrayers();
renderFuture();
renderLetter();