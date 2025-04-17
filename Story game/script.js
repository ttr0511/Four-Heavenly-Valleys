let lname = 'Shi';
let fname = 'Jin';
let fatepoints = 3;
let qi = 1;
let max_qi = 1;
let cultivation_realm = 'Low Foundation Forming';
let cultivation_progress = 0;
let totalDays = 365;
let daysleft = totalDays;
let potential_boost = 1;
let comprehension_boost = 1;
let body_boost = 1;
let psyche_boost = 1;
let menu_open = false;
let age = 13;


let cultivation_technique = 'Myriad Balance Breathing';
let cultivation_technique_level = 1;
let cultivation_technique_max_level = 5;
let foundation = 1;
let speed_per_day = 40

let technique_exp = 0
let technique_exp_req = 150
let cultivation_technique_multi = 1;

let mental_state = 79;
let mental_state_max = 100;
let mental_state_index = ['Fractured', 'Unsteady', 'Balanced', 'Calm', 'Tranquil', 'Tranquil']

let sect_points = 0;
let sect_name = 'Four Heavenly Valleys Sect';

let current_location = 'Four Heavenly Valleys Sect';

let spirit_stones = 0;


let delaybreakthrough = false;

let lesser_mind_settling_pill_count = 0
let lesser_spirit_leaf_count = 0
let lesser_soul_ash_count = 0
let wailshade_tear_count = 0
let whispering_bone_count = 0
let remnant_will_count = 0

let health = 25;
let max_health = 25;
let defense = 0;
let attack = 5;
let strength = 1; // influences attack
let resilience = 1; // influences defense
let vitality = 1; // influences health
let max_strength = 3;
let max_resilience = 3;
let max_vitality = 3;

let realm_boost = 1;
let realm_count = 0;

let combat_art = {
  name: 'none',
  strength_boost: 1,
  resilience_boost: 1,
  vitality_boost: 1
}

let attributes = {
  body: 3,
  comprehension: 3,
  psyche: 3,
  charm: 3,
  potential: 1
}

let enemy_stats = {
  name: 'none',
  health: 0,
  max_health: 0,
  defense: 0,
  attack: 0,
}

let body_fate_labels = ['Frail', 'Weak', 'Ordinary', 'Extraordinary', 'Harmonious', 'Perfect']
let comprehension_fate_labels = ['Slow', 'Dull', 'Ordinary', 'Insightful', 'Perceptive','Enlightened']
let psyche_fate_labels = ['Fragile', 'Shaky', 'Ordinary', 'Steady', 'Serene', 'Unshakable']
let charm_fate_labels = ['Hideous', 'Ugly', 'Ordinary', 'Alluring', 'Mesmerizing', 'Magnificent']
let potential_fate_labels = ['False Root', 'Mortal Root', 'Earth Root', 'Heavenly Root', 'Superior Root', 'Exalted Root']


function convert(num) {
    if (num < 1000) {
        return num.toString();
    }
    else {
        const suffixes = ["K", "M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No", "Dc"]
        let suffixIndex = Math.floor(Math.log10(num) / 3) - 1;
        let value = num / Math.pow(1000,suffixIndex + 1);
        return value.toFixed(2) + suffixes[suffixIndex];
    }
}

function rest() {
  if (daysleft >= 5) {
    daysleft -= 5;
    health = max_health;
    updateDisplay()
  }
}

function train_strength() {
  if (daysleft < 5 || strength >= max_strength) {
    updateDisplay()
    return
  }
  daysleft -= 5
  strength += (0.10 / strength) * body_boost
  strength = Math.round(strength * 100) / 100
  if (strength > max_strength) {
    strength = max_strength
  }
  updateDisplay()
}

function train_resilience() {
  if (daysleft < 5 || resilience >= max_resilience) {
    updateDisplay()
    return
  }
  daysleft -= 5
  resilience += (0.10 / resilience) * body_boost
  resilience = Math.round(resilience * 100) / 100
  if (resilience > max_resilience) {
    resilience = max_resilience
  }
  updateDisplay()
}

function train_vitality() {
  if (daysleft < 5 || vitality >= max_vitality) {
    updateDisplay()
    return
  }
  daysleft -= 5
  vitality += (0.10 / vitality) * body_boost
  vitality = Math.round(vitality * 100) / 100
  if (vitality > max_vitality) {
    vitality = max_vitality
  }
  updateDisplay()
}

function alchemy_item_display(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Lesser Mind-Settling Pill</p>
    <p>You have <span id='display1'></span></p>
    <p>Calms the mind and magically elevates the users psyche!</p>
    <p>Ingredients: 5 lesser spirit leafs and 1 lesser soul ash</p>
    <p>50% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Lesser Mind-Settling Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${lesser_spirit_leaf_count} lesser spirit leafs, and x${lesser_soul_ash_count} lesser soul ash`;
    document.getElementById('display1').innerText = `x${lesser_mind_settling_pill_count} Lesser Mind-Settling Pills`;
  }
  updateDisplay()
}


function create_item(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    let rando = Math.random()
    if (lesser_spirit_leaf_count >= 5 && lesser_soul_ash_count >= 1) {
      lesser_spirit_leaf_count -= 5
      lesser_soul_ash_count -= 1
    }
    if (lesser_spirit_leaf_count >= 5 && lesser_soul_ash_count >= 1 && rando <= 0.5) {
      lesser_mind_settling_pill_count += 1
      
    }

    document.getElementById('alchemy_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Lesser Mind-Settling Pill</p>
    <p>You have <span id='display1'></span></p>
    <p>Calms the mind and magically elevates the users psyche!</p>
    <p>Ingredients: 5 lesser spirit leafs and 1 lesser soul ash</p>
    <p>50% chance of success</p>
    <p>You have: <span id='herbdisplay'></span></p>
    <button class='normal_buttons' onclick='create_item("Lesser Mind-Settling Pill")'>Create</button>

    `
    document.getElementById('herbdisplay').innerText = `x${lesser_spirit_leaf_count} lesser spirit leafs, and x${lesser_soul_ash_count} lesser soul ash`;
    document.getElementById('display1').innerText = `x${lesser_mind_settling_pill_count} Lesser Mind-Settling Pills`;
  }
  updateDisplay()
}

function shop_item_display(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Lesser Mind-Settling Pill</p>
    <p>Calms the mind and magically elevates the users psyche!</p>
    <p>Costs 5 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Lesser Mind-Settling Pill")'>Buy</button>

    `
    
  }
  if (item == 'Minor Earth Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Earth Combat Art</p>
    <p>A basic earth combat art that guarrantees strong defense and mediocre offense</p>
    <p>Costs 10 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Minor Earth Combat Art")'>Buy</button>

    `
  }
  if (item == 'Minor Water Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Water Combat Art</p>
    <p>A basic water combat art that has mediocre offense and weak defense, but also contains a healing attribute</p>
    <p>Costs 10 Sect Points</p>
    <button class='normal_buttons' onclick='buy_item("Minor Water Combat Art")'>Buy</button>

    `
  }
  if (item == 'Minor Fire Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Fire Combat Art</p>
    <p>A basic fire combat art that has very strong offense and weak defense, and also contains a burning attribute</p>
    
    <p>Costs 10 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Fire Combat Art")'>Buy</button>
    
    `
  }
  if (item == 'Minor Air Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Air Combat Art</p>
    <p>A basic air combat art that has mediocre offense and mediocre defense, but also contains a flight attribute</p>
    
    <p>Costs 10 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Air Combat Art")'>Buy</button>
    
    `
  }
  if (item == 'Minor Metal Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Metal Combat Art</p>
    <p>A basic metal combat art that has strong offense and strong defense</p>
    
    <p>Costs 15 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Metal Combat Art")'>Buy</button>
    
    `
  }
  if (item == 'Minor Wood Combat Art') {
    document.getElementById('shop_menu_items_info').innerHTML = 
    `
    <p class='text_label'>Minor Wood Combat Art</p>
    <p>A basic wood combat art that provides increased vitality, has mediocre offense and strong defense, and contains a strong healing attribute</p>
    
    <p>Costs 15 Sect Points</p>
    
    <button class='normal_buttons' onclick='buy_item("Minor Wood Combat Art")'>Buy</button>
    
    `
  }
  updateDisplay()
}

function buy_item(item) {
  if (item == 'Lesser Mind-Settling Pill' && sect_points >= 5) {
    lesser_mind_settling_pill_count += 1;
    sect_points -= 5;
    updateDisplay();
  }
  if (item == 'Minor Earth Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Earth Combat Art';
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.1;
    sect_points -= 10;
    updateDisplay();
  }
  if (item == 'Minor Water Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Water Combat Art';
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 1.25;
    combat_art.vitality_boost = 1.25;
    sect_points -= 10;
    updateDisplay();
  }
  if (item == 'Minor Fire Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Fire Combat Art';
    combat_art.strength_boost = 2.5;
    combat_art.resilience_boost = 1.25;
    combat_art.vitality_boost = 1.1;
    sect_points -= 10;
    updateDisplay();
  }
  if (item == 'Minor Air Combat Art' && sect_points >= 10) {
    combat_art.name = 'Minor Air Combat Art';
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 1.5;
    combat_art.vitality_boost = 1.25;
    sect_points -= 10;
    updateDisplay();
  }
  if (item == 'Minor Metal Combat Art' && sect_points >= 15) {
    combat_art.name = 'Minor Metal Combat Art';
    combat_art.strength_boost = 2;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.1;
    sect_points -= 15;
    updateDisplay();
  }
  if (item == 'Minor Wood Combat Art' && sect_points >= 15) {
    combat_art.name = 'Minor Wood Combat Art';
    combat_art.strength_boost = 1.5;
    combat_art.resilience_boost = 2;
    combat_art.vitality_boost = 1.5;
    sect_points -= 15;
    updateDisplay();
  }
  updateDisplay();
}

function use_item(item) {
  if (item == 'Lesser Mind-Settling Pill') {
    lesser_mind_settling_pill_count -= 1
    mental_state += 5
    if (mental_state > 100) mental_state = 100;
    updateDisplay();
  }
}
function doSectTask(points, days_amt) {
  if (daysleft - days_amt >= 0) {
    daysleft -= days_amt;
    sect_points += points;
    updateDisplay();
  }
}

function doCultivation() {
  const input = document.getElementById('day_input');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft) {
    alert("Enter a valid number of days");
    return;
  }
  daysleft -= days;
  cultivation_progress += (days / speed_per_day) * potential_boost * cultivation_technique_multi;
  if (cultivation_progress > 100)  {
    
    foundation += ((cultivation_progress - 100) / 100) * (speed_per_day / 40)
    foundation = Math.round(foundation * 100) / 100

    cultivation_progress = 100;
  }
  updateDisplay()
}

function learn_technique() {
  const input = document.getElementById('day_input2');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft) {
    alert("Enter a valid number of days");
    return;
  }
  daysleft -= days;
  old_technique_exp = technique_exp
  technique_exp += days * comprehension_boost;
  if (technique_exp >= technique_exp_req && cultivation_technique_level >= cultivation_technique_max_level) {
    technique_exp = technique_exp_req
    daysleft += Math.round((technique_exp_req - old_technique_exp) / (comprehension_boost))
    updateDisplay()
    return
  }
  if (technique_exp >= technique_exp_req) level_up_technique();


  updateDisplay()
}

function level_up_technique() {
  if (technique_exp >= technique_exp_req) {
    technique_exp -= technique_exp_req;
    cultivation_technique_level += 1;
    technique_exp_req *= 1.5;
    cultivation_technique_multi += 0.5
    updateDisplay()
    if (technique_exp >= technique_exp_req) level_up_technique();
  }
}

function mentalGainPerDay(current_state) {
  if (current_state < 50) return 1;
  if (current_state < 60) return 1 / 5;
  if (current_state < 70) return 1 / 10;
  if (current_state < 80) return 1 / 20;
  if (current_state < 90) return 1 / 30;
  if (current_state < 100) return 1 / 40;
  return 0;
}

function meditate() {
  const input = document.getElementById('day_input3');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft) {
    alert("Enter a valid number of days");
    return;
  }

  let spentDays = 0;
  while (spentDays < days && mental_state < mental_state_max) {
    const gain = mentalGainPerDay(mental_state) * psyche_boost;
    mental_state += gain;
    spentDays++;
  }

  daysleft -= spentDays;
  if (mental_state > mental_state_max) mental_state = mental_state_max;

  updateDisplay();
}


function calculateMentalGain(startingState, days, boost = psyche_boost) {
  let simulatedState = startingState;
  let gain = 0;
  
  for (let i = 0; i < days && simulatedState < mental_state_max; i++) {
    const dailyGain = mentalGainPerDay(simulatedState) * boost;
    simulatedState += dailyGain;
    gain += dailyGain;
  }

  return gain;
}

function toggle_spatial_ring_menu() {
  let spatial_ring_menu = document.getElementById('spatial_ring_menu2');
  let isVisible = spatial_ring_menu.style.display === 'block';

  closeAllMenus();
  spatial_ring_menu.style.display = isVisible ? 'none' : 'block';
}

function toggle_sect_world_menu() {
  let sect_world_menu = document.getElementById('sect_world_menu');
  let isVisible = sect_world_menu.style.display === 'block';
  let selection_world_menu = document.getElementById('selection_world_menu');

  if (!isVisible) {
    sect_world_menu.style.display = 'block';
    selection_world_menu.style.display = 'none';
  }
  else {
    sect_world_menu.style.display = 'none';
    selection_world_menu.style.display = 'block';
  }
}

function toggle_shop_menu() {
  let shop_menu = document.getElementById('shop_menu');
  let isVisible = shop_menu.style.display === 'block';
  let selection_world_menu = document.getElementById('selection_world_menu');

  if (!isVisible) {
    shop_menu.style.display = 'block';
    selection_world_menu.style.display = 'none';
  }
  else {
    shop_menu.style.display = 'none';
    selection_world_menu.style.display = 'block';
  }
}

function toggle_explore_world_menu() {
  let explore_world_menu = document.getElementById('explore_world_menu');
  let isVisible = explore_world_menu.style.display === 'block';
  let selection_world_menu = document.getElementById('selection_world_menu');

  if (!isVisible) {
    explore_world_menu.style.display = 'block';
    selection_world_menu.style.display = 'none';
  }
  else {
    explore_world_menu.style.display = 'none';
    selection_world_menu.style.display = 'block';
  }
}

function toggle_alchemy_menu() {
  let alchemy_menu = document.getElementById('alchemy_menu');
  let isVisible = alchemy_menu.style.display === 'block';
  let selection_world_menu = document.getElementById('selection_world_menu');

  if (!isVisible) {
    alchemy_menu.style.display = 'block';
    selection_world_menu.style.display = 'none';
  }
  else {
    alchemy_menu.style.display = 'none';
    selection_world_menu.style.display = 'block';
  }
}

function toggle_cultivation_chamber_menu() {
  let menu = document.getElementById('cultivation_chamber_menu2');
  let isVisible = menu.style.display === 'block';

  closeAllMenus();
  menu.style.display = isVisible ? 'none' : 'block';

}

function toggle_world_menu() {
  let world_menu2 = document.getElementById('world_menu2');
  let isVisible = world_menu2.style.display === 'block';

  closeAllMenus();
  world_menu2.style.display = isVisible ? 'none' : 'block';
}

function toggle_cultivation_menu() {
  let cultivation_menu = document.getElementById('cultivation_menu2');
  let isVisible = cultivation_menu.style.display === 'block';
  let selection_menu = document.getElementById('selection_cultivation_chamber_menu');

  if (!isVisible) {
    cultivation_menu.style.display = 'block';
    selection_menu.style.display = 'none';
  } else {
    cultivation_menu.style.display = 'none';
    selection_menu.style.display = 'block';
  }
}

function toggle_technique_menu() {
  let technique_menu = document.getElementById('technique_menu2');
  let isVisible = technique_menu.style.display === 'block';
  let selection_menu = document.getElementById('selection_cultivation_chamber_menu');

  if (!isVisible) {
    technique_menu.style.display = 'block';
    selection_menu.style.display = 'none';
  } else {
    technique_menu.style.display = 'none';
    selection_menu.style.display = 'block';
  }
}

function toggle_meditation_menu() {
  let meditation_menu = document.getElementById('meditation_menu2');
  let isVisible = meditation_menu.style.display === 'block';
  let selection_menu = document.getElementById('selection_cultivation_chamber_menu');

  if (!isVisible) {
    meditation_menu.style.display = 'block';
    selection_menu.style.display = 'none';
  } else {
    meditation_menu.style.display = 'none';
    selection_menu.style.display = 'block';
  }
}

function toggle_body_menu() {
  let body_menu = document.getElementById('body_menu2');
  let isVisible = body_menu.style.display === 'block';
  let selection_menu = document.getElementById('selection_cultivation_chamber_menu');

  if (!isVisible) {
    body_menu.style.display = 'block';
    selection_menu.style.display = 'none';
  } else {
    body_menu.style.display = 'none';
    selection_menu.style.display = 'block';
  }
}



function closeAllMenus() {
  document.getElementById('cultivation_chamber_menu2').style.display = 'none';
  document.getElementById('info_menu2').style.display = 'none';
  document.getElementById('world_menu2').style.display = 'none';
  document.getElementById('spatial_ring_menu2').style.display = 'none';
}



function toggle_info_menu() {
  let info_menu2 = document.getElementById('info_menu2');
  let isVisible = info_menu2.style.display === 'block';

  closeAllMenus();
  info_menu2.style.display = isVisible ? 'none' : 'block';
}

function toggle_world_menu() {
  let world_menu2 = document.getElementById('world_menu2');
  let isVisible = world_menu2.style.display === 'block';

  closeAllMenus();
  world_menu2.style.display = isVisible ? 'none' : 'block';
}

function go_to_spirit_garden() {
  if (daysleft >= 4) {
    document.body.style.backgroundImage = 'url("images/spirit garden.png")';
    daysleft -= 4;
    current_location = 'Spirit Garden';
    document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
    <br><br>
    <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
    <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
    <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>
    `;
    closeAllMenus();
  }
  
  updateDisplay();
}

function gather_herbs() {
  const input = document.getElementById('spirit_garden_day_input');
  let days = parseInt(input.value);
  if (isNaN(days) || days < 1 || days > daysleft - 4) {
    alert("Enter a valid number of days");
    return;
  }
  daysleft -= days;

  let chance = days * 10;
  let herbs = chance / 100;

  let random_num = Math.floor(Math.random() * 3) - 1;
  
  if (herbs > 2) {
    lesser_spirit_leaf_count += herbs + random_num;
  }

  else {
    let rando = Math.random()
    if (rando < herbs) {
      lesser_spirit_leaf_count += Math.round(herbs)
    }
  }

  lesser_spirit_leaf_count = Math.round(lesser_spirit_leaf_count);

  document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
  <br><br>
  <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
  <br><br>
  <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
  <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
  <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>

  You now have <span id='herbcount'></span> lesser spirit leafs.
  `;
  document.getElementById('herbcount').innerText = lesser_spirit_leaf_count;
  updateDisplay();
}

function go_to_outer_soul_valley() {
  if (daysleft >= 6) {
    daysleft -= 6;
    current_location = 'Outer Soul Valley';
    document.body.style.backgroundImage = 'url("images/soul valley.png")';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
    <br><br>
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  updateDisplay();
}

function explore_outer_soul_valley() {
  if (daysleft >= 5) {
    daysleft -= 5;
    current_location = 'Outer Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    
    
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
    
    <br><br>
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    <br><br>
    <p id='display1'></p>
    `;
    let rando = Math.random();
    if (rando < 0.5) {
      lesser_soul_ash_count += 1;
      document.getElementById('display1').innerText = 'You found 1 lesser soul ash!'
    }
    else if (rando < 0.66) {
      fight_enemy('Wandering Wailshade')
    }
    else if (rando < 0.83) { // fight
      fight_enemy('Remnant Spirit Rat')
    }
    else { // fight
      fight_enemy('Grudgebound Wisp')
    }
    closeAllMenus();
  }
  updateDisplay();
}

function fight_enemy(enemy) {
  if (enemy == 'Remnant Spirit Rat') {
    enemy_stats.name = 'Remnant Spirit Rat';
    enemy_stats.health = 500;
    enemy_stats.max_health = 500;
    enemy_stats.defense = 10;
    enemy_stats.attack = 50;
    updateFight();
  }
  if (enemy == 'Wandering Wailshade') {
    enemy_stats.name = 'Wandering Wailshade';
    enemy_stats.health = 2000;
    enemy_stats.max_health = 2000;
    enemy_stats.defense = 30;
    enemy_stats.attack = 30;
    updateFight();
  }
  if (enemy == 'Grudgebound Wisp') {
    enemy_stats.name = 'Grudgebound Wisp';
    enemy_stats.health = 250;
    enemy_stats.max_health = 250;
    enemy_stats.defense = 5;
    enemy_stats.attack = 200;
    updateFight();
  }
  
}

function updateFight() {
  document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
  <br><br>
  <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
  <br><br>
  <p id='yourhealthdisplay'>Your Health</p>
  <progress id="healthBar" value="${health}" max="${max_health}"></progress>
  <br><br>
  <button class='normal_buttons' onclick='attack_enemy("${enemy_stats.name}")'>Attack</button>
  <br><br>
  <p id='enemyhealthdisplay'></p>
  <progress id="enemyHealthBar" value="${enemy_stats.health}" max="${enemy_stats.max_health}"></progress>
  <p id='display1'></p>
  `;
  document.getElementById('yourhealthdisplay').innerText = 'Your Health: ' + health + ' / ' + max_health;
  document.getElementById('enemyhealthdisplay').innerText = enemy_stats.name + ' Health: ' + enemy_stats.health + ' / ' + enemy_stats.max_health;
  
  const style = document.createElement('style');
  style.innerHTML = `
    progress {
      width: 100%;
      height: 20px;
      border: 1px solid black;
    }

    progress::-webkit-progress-bar {
      background-color: red;
    }

    progress::-webkit-progress-value {
      background-color: green;
    }

    progress::-moz-progress-bar {
      background-color: green;
    }
  `;
  document.head.appendChild(style);
}
function attack_enemy(enemy) {
  if (enemy == 'Remnant Spirit Rat') {
    let damage = Math.max(attack * 0.1, attack * (attack / (attack + enemy_stats.defense)));
    damage = Math.round(damage * 100) / 100; 
    enemy_stats.health -= damage;
    updateFight();
    if (enemy_stats.health > 0) {
      let damage = Math.max(enemy_stats.attack * 0.1, enemy_stats.attack * (enemy_stats.attack / (enemy_stats.attack + defense)));
      damage = Math.round(damage * 100) / 100; 
      health -= damage;
      enemy_stats.health = Math.round(enemy_stats.health * 100) / 100;
      updateDisplay();
      updateFight();
    }
    else {
      document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
      <br><br>
      <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
      <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
      <br><br>
      You've slain the Remnant Spirit Rat and gained 3 lesser soul ashes and 1 whispering bone.
      <p id='display1'></p>
      `;
      
      lesser_soul_ash_count += 3;
      whispering_bone_count += 1;
      updateDisplay();
    }

    if (health <= 0) {
      document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
      <br><br>
      <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
      <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
      <br><br>
      You've been defeated by the Remnant Spirit Rat.
      <p id='display1'></p>
      `;
      health = 0;
      updateDisplay();
    }
    
  }

  if (enemy == 'Wandering Wailshade') {
    let damage = Math.max(attack * 0.1, attack * (attack / (attack + enemy_stats.defense)));
    damage = Math.round(damage * 100) / 100; 
    enemy_stats.health -= damage;
    updateFight();
    if (enemy_stats.health > 0) {
      let damage = Math.max(enemy_stats.attack * 0.1, enemy_stats.attack * (enemy_stats.attack / (enemy_stats.attack + defense)));
      damage = Math.round(damage * 100) / 100; 
      health -= damage;
      enemy_stats.health = Math.round(enemy_stats.health * 100) / 100;
      updateDisplay();
      updateFight();
    }
    else {
      document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
      <br><br>
      <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
      <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
      <br><br>
      You've slain the Wandering Wailshade and gained 1 lesser soul ashes and 2 wailshade tears.
      <p id='display1'></p>
      `;
      
      lesser_soul_ash_count += 1;
      wailshade_tear_count += 2
      updateDisplay();
    }

    if (health <= 0) {
      document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
      <br><br>
      <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
      <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
      <br><br>
      You've been defeated by the Wandering Wailshade.
      <p id='display1'></p>
      `;
      health = 0;
      updateDisplay();
    }
  }

  if (enemy == 'Grudgebound Wisp') {
    let damage = Math.max(attack * 0.1, attack * (attack / (attack + enemy_stats.defense)));
    damage = Math.round(damage * 100) / 100; 
    enemy_stats.health -= damage;
    
    updateFight();
    if (enemy_stats.health > 0) {
      let damage = Math.max(enemy_stats.attack * 0.1, enemy_stats.attack * (enemy_stats.attack / (enemy_stats.attack + defense)));
      damage = Math.round(damage * 100) / 100; 
      health -= damage;
      enemy_stats.health = Math.round(enemy_stats.health * 100) / 100;
      updateDisplay();
      updateFight();
    }
    else {
      document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
      <br><br>
      <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
      <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
      <br><br>
      You've slain the Grudgebound Wisp and gained 2 lesser soul ashes and 1 remnant will.
      <p id='display1'></p>
      `;
      
      lesser_soul_ash_count += 2;
      remnant_will_count += 1;
      updateDisplay();
    }

    if (health <= 0) {
      document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
      <br><br>
      <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
        
      <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
      <br><br>
      You've been defeated by the Grudgebound Wisp.
      <p id='display1'></p>
      `;
      health = 0;
      updateDisplay();
    }
  }
}


function go_to_sect(time) {
  if (daysleft >= time) {
    current_location = 'Four Heavenly Valleys Sect';
    document.body.style.backgroundImage = "url('images/background (new).png')"
    daysleft -= time;
    document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
    <br><br>
    As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
    <br><br>
    Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
    <br><br>
    (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
    `
    document.getElementById('cultivation_base').innerText = cultivation_realm;
    document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  }
  updateDisplay();
}

function continue_game_2() {
  document.getElementById('bottom_bar').style.display = 'block';
  delaybreakthrough = false
  if (current_location == 'Spirit Garden') {
    current_location = 'Spirit Garden';
    document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
    <br><br>
    <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
    <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
    <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Outer Soul Valley') {
    current_location = 'Outer Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
      
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Four Heavenly Valleys Sect') {
    current_location = 'Four Heavenly Valleys Sect';
    document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
    <br><br>
    As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
    <br><br>
    Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
    <br><br>
    (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
    `
    document.getElementById('cultivation_base').innerText = cultivation_realm;
    document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  }
  updateDisplay();
}
function continue_game() {
  daysleft = 365
  age += 1

  let decayDays = Math.floor(Math.random() * 46) + 15;
  let decayAmount = 0
  if (mental_state < 100) {
    decayAmount = calculateMentalGain(mental_state, decayDays);
  }
  else {
    decayAmount = 5
  }
  

  if (sect_points >= 2) {
    sect_points -= 2;
  }
  else {
    sect_points -= 4;
  }

  if (current_location == 'Spirit Garden') {
    current_location = 'Spirit Garden';
    document.getElementById('main_text').innerHTML = `You're inside the Spirit Garden. You can feel the spiritual energy of the garden.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(4)'>Go back to sect (4 days)</button>
    <br><br>
    <label for="spirit_garden_day_input">Days to Gather Herbs:</label>
    <input type="number" id="spirit_garden_day_input" value="1" min="1" max="365" style="width: 60px;" />
    <button class='normal_buttons' onclick='gather_herbs()'>Gather Herbs</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Outer Soul Valley') {
    current_location = 'Outer Soul Valley';
    document.getElementById('main_text').innerHTML = `You're inside the Outer Soul Valley. You can feel the spiritual energy of the valley.
    <br><br>
    <button class='normal_buttons' onclick='go_to_sect(6)'>Go back to sect (6 days)</button>
      
    <button class='normal_buttons' onclick='explore_outer_soul_valley()'>Explore (5 days)</button>
    `;
    closeAllMenus();
  }
  else if (current_location == 'Four Heavenly Valleys Sect') {
    current_location = 'Four Heavenly Valleys Sect';
    document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
    <br><br>
  As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
  <br><br>
  Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
  <br><br>
  (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
  `
    document.getElementById('cultivation_base').innerText = cultivation_realm;
    document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
  }
  
  
  updateDisplay();

  if (cultivation_progress >= 100 && delaybreakthrough == false) {
    document.getElementById('bottom_bar').style.display = 'none';
    document.getElementById('main_text').innerHTML = `While you're sitting in your room in the outer valley of the Four heaveny Valleys Sect, you check your cultivation base and realize that you've reached the peak of the <span id='cultivation_base1'></span>.
    <br><br>
    You have a foundation of <span id='foundation'></span> your original foundation.
    <br><br>
    Due to your work at learning your technique, your foundation is additionally boosted by <span id='learning_boost'></span>.
    <br><br>
    Because of your mental state, your foundation is further changed by a factor of <span id='psyche_boost'></span>.
    <br><br>
    Because of your body, your foundation is further changed by a factor of <span id='body_boost'></span>.
    <br><br>
    Currently, your chances at a successful breakthrough is <span id='breakthrough_chance'></span> <span id='breakthrough_chance_percent'></span>.
    <br><br>
    What will you do?
    <br><br>
    <button id='continue_cultivation_button' onclick="continue_game_2()" class='normal_buttons'>Delay breakthrough</button>
    <button id='break_through_btn' onclick="breakthrough()" class='normal_buttons'>Breakthrough</button>
    `
    document.getElementById('cultivation_base1').innerText = cultivation_realm;
    document.getElementById('cultivation_base1').style.color = 'rgb(255, 207, 119)';
    document.getElementById('foundation').innerText = foundation + 'x'
    document.getElementById('foundation').style.color = 'rgb(255, 207, 119)';
    document.getElementById('learning_boost').innerText = cultivation_technique_multi + 'x';
    document.getElementById('learning_boost').style.color = 'rgb(255, 207, 119)';
    document.getElementById('psyche_boost').innerText = Math.round(((mental_state / 100) + 0.3) * 100) / 100 + 'x';
    document.getElementById('psyche_boost').style.color = 'rgb(255, 207, 119)';
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    document.getElementById('body_boost').innerText = body_increase_boost + 'x';
    document.getElementById('body_boost').style.color = 'rgb(255, 207, 119)';
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    if (cultivation_realm == 'Low Foundation Forming') breakthroughchance_num *= 8;
    if (cultivation_realm == 'Middle Foundation Forming') breakthroughchance_num *= 7;
    if (cultivation_realm == 'High Foundation Forming') breakthroughchance_num *= 6;
    if (cultivation_realm == 'Peak Foundation Forming') breakthroughchance_num *= 5;
    if (breakthroughchance_num > 100) {
        breakthroughchance_num = 100
    }
        breakthroughchance = ''
        if (breakthroughchance_num < 15) {
            breakthroughchance = 'low'
        }
        else if (breakthroughchance_num < 30) {
            breakthroughchance = 'slim'
        }
        else if (breakthroughchance_num < 49) {
            breakthroughchance = 'less than half'
        }

        else if (breakthroughchance_num < 60) {
            breakthroughchance = 'half'
        }

        else if (breakthroughchance_num < 75) {
            breakthroughchance = 'decent'
        }

        else if (breakthroughchance_num < 90) {
            breakthroughchance = 'high'
        }

        else {
            breakthroughchance = 'very high'
        }
    document.getElementById('breakthrough_chance').innerText = breakthroughchance;
    document.getElementById('breakthrough_chance').style.color = 'rgb(255, 207, 119)';
    
    document.getElementById('breakthrough_chance_percent').innerText = '(' + Math.round(breakthroughchance_num * 100) / 100 + '%)';
    document.getElementById('breakthrough_chance_percent').style.color = 'rgb(255, 207, 119)';
  }
  delaybreakthrough = false

  mental_state -= decayAmount;
  if (mental_state < 0) mental_state = 0;
  updateDisplay();

}


function breakthrough() {
  if (cultivation_realm == 'Low Foundation Forming') {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost;
    random = Math.random() * 100
    breakthroughchance_num *= 8

    if (random < breakthroughchance_num) {
      cultivation_realm = 'Middle Foundation Forming'
      realm_count += 1
      cultivation_progress = 0
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 0.5;
      max_strength += 1;
      max_resilience += 1;
      max_vitality += 1;
      continue_game_2()
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
    }
    updateDisplay()
    return
  }

  if (cultivation_realm == 'Middle Foundation Forming') {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    random = Math.random() * 100
    breakthroughchance_num *= 7

    if (random < breakthroughchance_num) {
      cultivation_realm = 'High Foundation Forming'
      realm_count += 1
      cultivation_progress = 0
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 0.5
      max_strength += 1
      max_resilience += 1
      max_vitality += 1
      continue_game_2()
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
      return
    }
    updateDisplay()
  }

  if (cultivation_realm == 'High Foundation Forming') {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    random = Math.random() * 100
    breakthroughchance_num *= 6

    if (random < breakthroughchance_num) {
      cultivation_realm = 'Peak Foundation Forming'
      realm_count += 1
      cultivation_progress = 0
      speed_per_day = speed_per_day * 1.5
      speed_per_day = Math.round(speed_per_day * 1000) / 1000
      realm_boost += 0.5
      max_strength += 1
      max_resilience += 1
      max_vitality += 1
      continue_game_2()
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
      return
    }
    updateDisplay()
  }

  if (cultivation_realm == 'Peak Foundation Forming') {
    body_increase_boost =  Math.round(((((strength / max_strength) + (resilience / max_resilience) + (vitality / max_vitality)) / 3) + 0.5) * 100) / 100
    breakthroughchance_num = foundation * cultivation_technique_multi * ((mental_state / 100) + 0.3) * body_increase_boost
    random = Math.random() * 100
    breakthroughchance_num *= 5

    if (random < breakthroughchance_num) {
      return
    }
    else {
      foundation = 1
      continue_game_2()
      document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
      <br><br>
      As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
      <br><br>
      Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
      <br><br>
      As you failed your breakthrough attempt, your foundation was harmed and has been reset to 1.
      <br><br>
      (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
      `
      document.getElementById('cultivation_base').innerText = cultivation_realm;
      document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
      return
    }
    updateDisplay()
  }
}



function changeFatePoints(change, attribute) {
  if (change == '+' && fatepoints < 1) return;
  if (attributes[attribute] <= 1 && change == '-') return;

  if (attribute == 'potential') {
    changePotential(change);
    updateDisplay();
    return;
  }

  attributes[attribute] = Math.max(1, attributes[attribute] + (change == '+' ? 1 : -1));

  if (change == '+') fatepoints--;
  else fatepoints++;

  if (attributes[attribute] < 1) attributes[attribute] = 1;
  updateDisplay();
}

function changePotential(change) {
  let currentLevel = attributes['potential'];

  if (change === '+') {
    if (currentLevel >= 6) return;

    let nextLevel = currentLevel + 1;
    let cost = (nextLevel * (nextLevel - 1)) / 2;

    if (fatepoints >= cost) {
      attributes['potential'] = nextLevel;
      fatepoints -= cost;
    }
  } else if (change === '-') {
    if (currentLevel <= 1) return;

    let refund = (currentLevel * (currentLevel - 1)) / 2;
    attributes['potential'] = currentLevel - 1;
    fatepoints += refund;
  }
}


function StartGame() {
  potential_boost = attributes['potential'];
  comprehension_boost = (attributes['comprehension'] - 2) / 2 + 0.5;
  body_boost = (attributes['body'] - 2) / 2 + 0.5;
  psyche_boost = (attributes['psyche'] - 2) / 2 + 0.5;
  document.getElementById('fate_body').style.display = 'none';
  document.getElementById('bottom_bar').style.display = 'block';
  document.getElementById('main_text').innerHTML = `You're inside your room in the outer valley of the Four Heavenly Valleys Sect.
  <br><br>
  As you look out the window, you see the vast outer valley surrounding you and the 3 other valleys of the sect in the distance. Across the outer valley, there's a harmonious atmosphere as many cultivators are gathered outside across the valley. Some are shopping in the market, others discussing and chatting with each other, and some in the arena sparring.
  <br><br>
  Inside your room, you sit down on a small rug embroidered with an image of the four heavenly valleys and begin to meditate. You begin to circulate your <span id='cultivation_base'></span> cultivation base.
  <br><br>
  (Reminder, Every year mental state decreases and you must pay two sect points otherwise there will be a penalty.)
  `
  
  document.getElementById('cultivation_base').innerText = cultivation_realm;
  document.getElementById('cultivation_base').style.color = 'rgb(255, 207, 119)';
}



function updateDisplay() {
  total_cultivation_progress = (realm_count * 100) + cultivation_progress
  max_qi = ((total_cultivation_progress * foundation) / 10) + 1
  qi = (max_qi * (mental_state / 100))
  max_qi = Math.round(max_qi * 100) / 100
  qi = Math.round(qi * 100) / 100
  document.getElementById('fatepoints').textContent = fatepoints;
  const attributesKeys = ['body', 'comprehension', 'psyche', 'charm'];
  const fateLabels = {
    body: body_fate_labels,
    comprehension: comprehension_fate_labels,
    psyche: psyche_fate_labels,
    charm: charm_fate_labels
  };

  attributesKeys.forEach((key) => {
    let value = attributes[key];
    let labelIndex = value <= 3 ? value - 1 :
                     (value == 4 || value == 5) ? 3 :
                     (value >= 6 && value <= 10) ? 4 : 5;
    document.getElementById(`${key}_fate_value`).textContent = fateLabels[key][labelIndex] + ' (' + value + ')';
  });

  const potentialIndex = Math.min(attributes['potential'] - 1, potential_fate_labels.length - 1);
  document.getElementById('potential_fate_value').textContent = potential_fate_labels[potentialIndex] + ' (' + attributes['potential'] + ')';
  
  document.getElementById('cultivation_progress').textContent = Math.round(cultivation_progress * 1000) / 1000 + '%';

  document.getElementById('days_left_display').textContent = daysleft;
  document.getElementById('days_left_topdisplay').textContent = daysleft;

  document.getElementById('sect_points_topdisplay').innerText = sect_points;

  document.getElementById('age_topdisplay').innerText = age;

  document.getElementById('info_name').textContent = fname + ' ' + lname
  document.getElementById('info_age').textContent = age
  document.getElementById('info_health').textContent = health + ' / ' + max_health;
  document.getElementById('info_attack').textContent = attack;
  document.getElementById('info_defense').textContent = defense;
  document.getElementById('info_strength').textContent = strength;
  document.getElementById('info_resilience').textContent = resilience;
  document.getElementById('info_vitality').textContent = vitality;
  document.getElementById('info_qi').textContent = qi + ' / ' + max_qi
  document.getElementById('info_realm').textContent = cultivation_realm;
  document.getElementById('cultivation_realm_display').textContent = cultivation_realm;
  document.getElementById('info_progress').textContent = cultivation_progress.toFixed(1) + '%';
  document.getElementById('info_days_left').textContent = daysleft;
  document.getElementById('info_cultivation_technique').innerText = cultivation_technique
  document.getElementById('info_cultivation_technique_level').innerText = cultivation_technique_level + ' / ' + cultivation_technique_max_level
  document.getElementById('info_cultivation_technique_progress').innerText = technique_exp.toFixed(1) + ' / ' + technique_exp_req.toFixed(1)
  document.getElementById('info_combat_art').innerText = combat_art.name
  document.getElementById('info_psyche').innerText = mental_state_index[Math.floor(mental_state / 20)] + ' (' + mental_state.toFixed(2) + ' / ' + mental_state_max +  ')'
  attributesKeys.forEach((key) => {
    let value = attributes[key];
    let labelIndex = value <= 3 ? value - 1 :
                     (value == 4 || value == 5) ? 3 :
                     (value >= 6 && value <= 10) ? 4 : 5;
    document.getElementById(`info_${key}_fate`).textContent = fateLabels[key][labelIndex] + ' (' + value + ')';
  });
  document.getElementById('info_potential_fate').textContent = potential_fate_labels[potentialIndex] + ' (' + attributes['potential'] + ')';

  if (lesser_mind_settling_pill_count > 0) {
    document.getElementById('lesser_mind_settling_pill_display_count').innerHTML = `Lesser Mind-Settling Pill x<span id='lesser_mind_settling_pill_display_count2'></span> <button class="adder_buttons" onclick="use_item('Lesser Mind-Settling Pill')">Use</button><br>`
    document.getElementById('lesser_mind_settling_pill_display_count2').innerText = lesser_mind_settling_pill_count;
    document.getElementById('lesser_mind_settling_pill_display_count').style.display = 'block'
  }
  else {
    document.getElementById('lesser_mind_settling_pill_display_count').style.display = 'none'
  }

  if (lesser_spirit_leaf_count > 0) {
    document.getElementById('lesser_spirit_leaf_display_count').innerHTML = `Lesser Spirit Leaf x<span id='lesser_spirit_leaf_display_count2'></span> <br>`
    document.getElementById('lesser_spirit_leaf_display_count2').innerText = lesser_spirit_leaf_count;
    document.getElementById('lesser_spirit_leaf_display_count').style.display = 'block'
  }
  else {
    document.getElementById('lesser_spirit_leaf_display_count').style.display = 'none'
  }

  if (lesser_soul_ash_count > 0) {
    document.getElementById('lesser_soul_ash_display_count').innerHTML = `Lesser Soul Ash x<span id='lesser_soul_ash_display_count2'></span> <br>`
    document.getElementById('lesser_soul_ash_display_count2').innerText = lesser_soul_ash_count;
    document.getElementById('lesser_soul_ash_display_count').style.display = 'block'
  }
  else {
    document.getElementById('lesser_soul_ash_display_count').style.display = 'none'
  }

  if (wailshade_tear_count > 0) {
    document.getElementById('wailshade_tear_display_count').innerHTML = `Wailshade Tear x<span id='wailshade_tear_display_count2'></span> <br>`
    document.getElementById('wailshade_tear_display_count2').innerText = wailshade_tear_count;
    document.getElementById('wailshade_tear_display_count').style.display = 'block'
  }
  else {
    document.getElementById('wailshade_tear_display_count').style.display = 'none'
  }

  if (whispering_bone_count > 0) {
    document.getElementById('whispering_bone_display_count').innerHTML = `Whispering Bone x<span id='whispering_bone_display_count2'></span> <br>`
    document.getElementById('whispering_bone_display_count2').innerText = whispering_bone_count;
    document.getElementById('whispering_bone_display_count').style.display = 'block'
  }
  else {
    document.getElementById('whispering_bone_display_count').style.display = 'none'
  }

  if (remnant_will_count > 0) {
    document.getElementById('remnant_will_display_count').innerHTML = `Remnant Will x<span id='remnant_will_display_count2'></span> <br>`
    document.getElementById('remnant_will_display_count2').innerText = remnant_will_count;
    document.getElementById('remnant_will_display_count').style.display = 'block'
  }
  else {
    document.getElementById('remnant_will_display_count').style.display = 'none'
  }




  document.getElementById('technique_name').textContent = cultivation_technique;
  document.getElementById('technique_level').textContent = cultivation_technique_level + ' / ' + cultivation_technique_max_level
  document.getElementById('technique_progress').textContent = technique_exp.toFixed(1) + ' / ' + technique_exp_req.toFixed(1)

  document.getElementById('mental_state_display').innerText = mental_state_index[Math.floor(mental_state / 20)] + ' (' + mental_state.toFixed(2) + ' / ' + mental_state_max +  ')'

  document.getElementById('sect_name').innerText = sect_name
  document.getElementById('sect_points').innerText = sect_points

  document.getElementById('strength_value').innerText = strength + ' / ' + max_strength
  document.getElementById('resilience_value').innerText = resilience + ' / ' + max_resilience
  document.getElementById('vitality_value').innerText = vitality + ' / ' + max_vitality
  document.getElementById('health_value1').innerText = health + ' / ' + max_health;

  if (health == max_health) {
    max_health = 25 * max_qi * vitality * combat_art.vitality_boost * realm_boost;
    health = max_health;
  }
  else {
    max_health = 25 * max_qi * vitality * combat_art.vitality_boost * realm_boost;
  }

  attack = 10 * strength * combat_art.strength_boost * realm_boost;
  defense = 10 * resilience * combat_art.resilience_boost * realm_boost;

  max_health = Math.round(max_health * 100) / 100;
  health = Math.round(health * 100) / 100;
  attack = Math.round(attack * 100) / 100;
  defense = Math.round(defense * 100) / 100;
  strength = Math.round(strength * 100) / 100;
  resilience = Math.round(resilience * 100) / 100;
  vitality = Math.round(vitality * 100) / 100;

  if (body_boost == 0) {
    body_boost = 0.25;
  }
  if (psyche_boost == 0) {
    psyche_boost = 0.25;
  }
  if (comprehension_boost == 0) {
    comprehension_boost = 0.25;
  }


}

function saveGame() {
  localStorage.setItem('save', JSON.stringify({
    lname,
    fname,
    fatepoints,
    qi,
    max_qi,
    cultivation_realm,
    cultivation_progress,
    totalDays,
    daysleft,
    potential_boost,
    comprehension_boost,
    body_boost,
    psyche_boost,
    
    menu_open,
    age,
    cultivation_technique,
    cultivation_technique_level,
    cultivation_technique_max_level,
    foundation,
    speed_per_day,

    technique_exp,
    technique_exp_req,
    cultivation_technique_multi,

    mental_state,
    mental_state_max,

    sect_points,

    lesser_mind_settling_pill_count,
    lesser_spirit_leaf_count,
    lesser_soul_ash_count,
    wailshade_tear_count,
    whispering_bone_count,
    remnant_will_count,

    health,
    max_health,
    defense,
    attack,
    strength,
    resilience,
    vitality,
    max_strength,
    max_resilience,
    max_vitality,

    realm_boost,
    realm_count,
    
    spirit_stones,

    combat_art: {
      name: combat_art.name,
      strength_boost: combat_art.strength_boost,
      resilience_boost: combat_art.resilience_boost,
      vitality_boost: combat_art.vitality_boost
    },

    attributes: {
      body: attributes.body,
      comprehension: attributes.comprehension,
      psyche: attributes.psyche,
      charm: attributes.charm,
      potential: attributes.potential
    },

  }));
}



function loadGame() {
if (localStorage.getItem('save')) {
    var save = JSON.parse(localStorage.getItem('save'));
    lname = save.lname || '';
    fname = save.fname || '';
    fatepoints = save.fatepoints || 0;
    qi = save.qi || 0;
    max_qi = save.max_qi || 0;
    cultivation_realm = save.cultivation_realm || 'Low Foundation Forming';
    cultivation_progress = save.cultivation_progress || 0;
    totalDays = save.totalDays || 365;
    daysleft = save.daysleft || 365;
    potential_boost = save.potential_boost || 1;
    comprehension_boost = save.comprehension_boost || 1;
    body_boost = save.body_boost || 1;
    psyche_boost = save.psych_boost || 1;
    menu_open = save.menu_open || false;
    age = save.age || 13;
    cultivation_technique = save.cultivation_technique || 'Myriad Balance Breathing';
    cultivation_technique_level = save.cultivation_technique_level || 1;
    cultivation_technique_max_level = save.cultivation_technique_max_level || 5;
    foundation = save.foundation || 1;
    speed_per_day = save.speed_per_day || 40;
    technique_exp = save.technique_exp || 0;
    technique_exp_req = save.technique_exp_req || 150;
    cultivation_technique_multi = save.cultivation_technique_multi || 1;
    mental_state = save.mental_state || 79;
    mental_state_max = save.mental_state_max || 100;
    sect_points = save.sect_points || 0;
    lesser_mind_settling_pill_count = save.lesser_mind_settling_pill_count || 0;
    lesser_spirit_leaf_count = save.lesser_spirit_leaf_count || 0;
    lesser_soul_ash_count = save.lesser_soul_ash_count || 0;
    wailshade_tear_count = save.wailshade_tear_count || 0;
    whispering_bone_count = save.whispering_bone_count || 0;
    remnant_will_count = save.remnant_will_count || 0;
    current_location = 'Four Heavenly Valleys Sect';
    health = save.health || 25;
    max_health = save.max_health || 25;
    defense = save.defense || 0;
    attack = save.attack || 5;
    strength = save.strength || 1;
    resilience = save.resilience || 1;
    vitality = save.vitality || 1;
    max_strength = save.max_strength || 3;
    max_resilience = save.max_resilience || 3;
    max_vitality = save.max_vitality || 3;
    spirit_stones = save.spirit_stones || 0;
    realm_boost = save.realm_boost || 1;
    realm_count = save.realm_count || 0;
    combat_art = save.combat_art || {
      name: 'none',
      strength_boost: 1,
      resilience_boost: 1,
      vitality_boost: 1
    };
    attributes = save.attributes || {
      body: 3,
      comprehension: 3,
      psyche: 3,
      charm: 3,
      potential: 1
    };
    StartGame()
    updateDisplay()

  }
}

setInterval(updateDisplay, 1000)
updateDisplay()
