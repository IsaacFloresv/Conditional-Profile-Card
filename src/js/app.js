import "../style/style.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let Name = variables.name;
  if (variables.name == null) Name = "Mafe";
  let AvatarURL = variables.avatarURL;
  if (variables.name == null) AvatarURL = "src/js/img/ mw.png";
  if (Name != "Mafer")
    variables.avatarURL = "https://randomuser.me/api/portraits/women/42.jpg";
  let LastName = variables.lastname;
  if (variables.lastname == null) LastName = "Walker";
  let Job = variables.role;
  if (variables.role == null) Job = "Interprete";
  let Twitter = variables.twitter;
  if (variables.twitter == null) Twitter = "https://twitter.com/MafeWalker";
  if (Twitter !== "https://twitter.com/MafeWalker")
    Twitter = "https://twitter.com/" + Twitter;
  let Github = variables.github;
  if (variables.github == null) Github = "https://github.com/mafewalker";
  if (Github !== "https://github.com/mafewalker")
    Github = "https://github.com/" + Github;
  let Linkedin = variables.linkedin;
  if (variables.linkedin == null) Linkedin = "https://linkedin.com/mafe.walker";
  if (Linkedin !== "https://linkedin.com/mafe.walker")
    Linkedin = "https://linkedin.com/" + Linkedin;
  let Instagram = variables.instagram;
  if (variables.instagram == null)
    Instagram = "https://instagram.com/mafewalker";
  if (Instagram !== "https://instagram.com/mafewalker")
    Instagram = "https://instagram.com/" + Instagram;
  let Estado = variables.city;
  if (variables.city == null) Estado = "New Marte";
  let Country = variables.country;
  if (variables.country == null) Country = "Tangamandapio";
  let Position = `class="${variables.socialMediaPosition}"`;
  if (variables.Position == null) Position = 'class="position-right"';

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src=${variables.avatarURL} class="photo" />
          <h1>${Name} ${LastName}</h1>
          <h2>${Job}</h2>
          <h3>${Estado}, ${Country}</h3>
          <ul ${Position}>
            <li><a href=${Twitter}><i class="bi bi-twitter"></i></a></li>
            <li><a href=${Github}><i class="bi bi-github"></i></a></li>
            <li><a href=${Linkedin}><i class="bi bi-linkedin"></i></a></li>
            <li><a href=${Instagram}><i class="bi bi-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: null,
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
