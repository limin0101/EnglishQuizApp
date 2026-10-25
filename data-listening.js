/**
 * ===================================================================
 * @file data-listening.js
 * @description 聽力考點 500 題生成引擎 + Practice 1 & 2 真題資料庫 (已移除時間括號提示版)
 * ===================================================================
 */

function generate500ListeningReviewQuestions() {
  const landmarks = [
    "SUPERMARKET", "HOSPITAL", "RESTAURANT", "LIBRARY", "BAKERY", 
    "POST OFFICE", "BANK", "POLICE STATION", "BOOKSTORE", "PARK"
  ];
  const peopleList = [
    { name: "Andy", pron: "He" },
    { name: "Julia", pron: "She" },
    { name: "Janice", pron: "She" },
    { name: "Henry", pron: "He" },
    { name: "Susan", pron: "She" },
    { name: "Tina", pron: "She" },
    { name: "Frank", pron: "He" },
    { name: "Stephen", pron: "He" },
    { name: "Lucy", pron: "She" },
    { name: "Jerry", pron: "He" },
    { name: "Maggie", pron: "She" },
    { name: "Kathy", pron: "She" }
  ];
  const locations = [
    { place: "in the kitchen", label: "廚房" },
    { place: "in the living room", label: "客廳" },
    { place: "in the bedroom", label: "臥室" },
    { place: "in the dining room", label: "飯廳" }
  ];
  const uncountables = [
    { word: "sugar", hint: "糖" },
    { word: "milk", hint: "牛奶" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "money", hint: "錢" }
  ];
  const indoorActivities = [
    { base: "play the guitar", ing: "playing the guitar", third: "plays the guitar" },
    { base: "play the piano", ing: "playing the piano", third: "plays the piano" },
    { base: "read a book", ing: "reading a book", third: "reads a book" },
    { base: "listen to music", ing: "listening to music", third: "listens to music" }
  ];

  const generated = [];

  for (let i = 0; i < 500; i++) {
    const type = i % 6;
    const person = peopleList[i % peopleList.length];
    const loc = locations[i % locations.length];
    const uncnt = uncountables[i % uncountables.length];
    const act = indoorActivities[i % indoorActivities.length];
    const hour = (i % 11) + 1;
    const nextHour = hour + 1;
    const prevHour = hour === 1 ? 12 : hour - 1;

    const lShuffled = localShuffle(landmarks);
    const centerB = lShuffled[0];
    const leftB = lShuffled[1];
    const rightB = lShuffled[2];

    let qObj = { module: "listening" };
    switch (type) {
      case 0:
        qObj.part = "【考點 1】時間辨析 (Quarter past)";
        qObj.prompt = "Question: Look at the clock. What time is it?";
        qObj.svgData = generateClockSvg(hour, 15);
        qObj.sceneHint = `時鐘短針指向 ${hour}，長針指向 3（即 ${hour}:15）。`;
        qObj.audioText = `Look at the clock and choose the best statement. Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${hour}. Statement C: It's half past ${hour}.`;
        qObj.options = [
          `It's a quarter past ${hour}.`,
          `It's a quarter to ${hour}.`,
          `It's half past ${hour}.`
        ];
        qObj.ans = 0;
        qObj.tip = `💡【時間讀法】a quarter past ${hour} 代表『過了一刻鐘』，即 ${hour}:15。`;
        break;
      case 1:
        qObj.part = "【考點 1】時間辨析 (Quarter to)";
        qObj.prompt = "Question: Look at the clock. What time is it?";
        qObj.svgData = generateClockSvg(hour, 45);
        qObj.sceneHint = `時鐘短針指向近 ${nextHour}，長針指向 9（即 ${hour}:45）。`;
        qObj.audioText = `Look at the clock and choose the best statement. Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${nextHour}. Statement C: It's half past ${hour}.`;
        qObj.options = [
          `It's a quarter past ${hour}.`,
          `It's a quarter to ${nextHour}.`,
          `It's half past ${hour}.`
        ];
        qObj.ans = 1;
        qObj.tip = `💡【時間讀法】a quarter to ${nextHour} 代表『差一刻鐘到 ${nextHour} 點』，即 ${hour}:45。`;
        break;
      case 2:
        qObj.part = "【考點 2】位置介系詞 (Between 隨機街景)";
        qObj.prompt = `Question: Look at the map. Where is the ${centerB.toLowerCase()}?`;
        qObj.svgData = generateMapSvg(centerB, leftB, rightB);
        qObj.sceneHint = `地圖上，${centerB} 位於 ${leftB} 與 ${rightB} 的中間。`;
        qObj.audioText = `Look at the map. Where is the ${centerB.toLowerCase()}? Statement A: It is beside the park. Statement B: It is between the ${leftB.toLowerCase()} and the ${rightB.toLowerCase()}. Statement C: It is behind the school.`;
        qObj.options = [
          "It is beside the park.",
          `It is between the ${leftB.toLowerCase()} and the ${rightB.toLowerCase()}.`,
          "It is behind the school."
        ];
        qObj.ans = 1;
        qObj.tip = `💡【空間介系詞】between A and B 代表『在兩者之間』。圖中 ${centerB} 位於兩棟建築中間。`;
        break;
      case 3:
        qObj.part = "【考點 4】疑問詞問答 (Where / 地點介系詞)";
        qObj.prompt = `Question: Where does ${person.name} ${act.base}?`;
        qObj.audioText = `Where does ${person.name} ${act.base}? Statement A: ${person.pron} has a big bag. Statement B: ${person.pron} does it ${loc.place}. Statement C: Yes, ${person.pron.toLowerCase()} does it every day.`;
        qObj.options = [
          `${person.pron} has a big bag.`,
          `${person.pron} does it ${loc.place}.`,
          `Yes, ${person.pron.toLowerCase()} does it every day.`
        ];
        qObj.ans = 1;
        qObj.tip = `💡【地點問答】聽到 Where 提問，核心回答為具體空間介系詞片語（${loc.place}：${loc.label}）。`;
        break;
      case 4:
        qObj.part = "【考點 5】現在進行式 (What is ... doing?)";
        qObj.prompt = `Question: What is ${person.name} doing right now?`;
        qObj.audioText = `What is ${person.name} doing right now? Statement A: ${person.pron} is ${act.ing}. Statement B: ${person.pron} ${act.third} every Sunday. Statement C: ${person.pron} can ${act.base}.`;
        qObj.options = [
          `${person.pron} is ${act.ing}.`,
          `${person.pron} ${act.third} every Sunday.`,
          `${person.pron} can ${act.base}.`
        ];
        qObj.ans = 0;
        qObj.tip = "💡【現在進行式】問句包含 is ... doing，回答必須使用主詞 + be動詞 + V-ing。";
        break;
      case 5:
      default:
        qObj.part = "【考點 6】數量疑問詞 (How much 不可數)";
        qObj.prompt = `Question: How much ${uncnt.word} do you need?`;
        qObj.audioText = `How much ${uncnt.word} do you need? Statement A: Just a little. Statement B: There are five. Statement C: Not many.`;
        qObj.options = ["Just a little.", "There are five.", "Not many."];
        qObj.ans = 0;
        qObj.tip = `💡【不可數名詞數量】${uncnt.word}（${uncnt.hint}）為不可數名詞，使用 How much 提問，回答用 a little 或 much。`;
        break;
    }
    qObj.qId = generateQuestionHash("l500_v4_" + i + "_" + qObj.prompt);
    generated.push(qObj);
  }
  return generated;
}

window.rawReviewQuestions = generate500ListeningReviewQuestions();

// =======================================================================
// Practice 1 真題資料庫
// =======================================================================
const p1Conv23_24 = "Good evening, Tim. Good evening, Sally. How are you? I am fine. Thank you. And you? I am not feeling good. Why not? Because my parents will not come to my birthday party. Why won't they? They need to fly to America to work.";
const p1Conv25_27 = "Hi Helen, where are you going? I'm going to watch a movie. Really, what kind of movie are you going to watch? I want to see a science fiction movie. I have to run now, the movie is about to start. Okay, and I have to be home before lunch. See you.";
const p1Talk28_30 = "Kathy likes to read books. She reads many different kinds of books. Chinese books, science books, and of course, English books. She also likes sports. She can play basketball, football, and golf well. Now she is learning how to play badminton. Her favorite food is hamburgers, but she is not fat. She is thin because she runs in the park every day and doesn't eat too much. I like her very much.";
const p1Talk31_32 = "In my free time, I like to swim. I am a good swimmer. I can also play the piano and the guitar very well. But I can't play the violin. If you want to be my friend, please tell me after class.";
const p1Talk33_35 = "I live in a small apartment with my classmate. We share the kitchen and bathroom. It is very difficult in the morning. I like to take a shower in the morning, but my classmate often uses the bathroom for a long time.";
const p1Conv36_37 = "Hello. This is Stephen. May I talk to Tina? Hold on, please. Hello, Stephen. This is Tina speaking. I am just calling to tell you that I can't go to your birthday party. I am really sorry. Why can't you come? My parents will go to Singapore for work.";
const p1Conv38_40 = "Did you tell your parents that you don't want to go? I feel they never listen to me. I am afraid if I tell them, they will still want me to go to Singapore with them. If you stay here, who is going to take care of you? My grandparents live near us. I can live with them. Well, I think you should tell your parents about your plan anyway.";

window.rawMockP1Data = [
  { part: "Part 1: Photographs", prompt: "Question 1", svgData: window.p1SvgImages.q1, sceneHint: "一位名叫 Julia 的小女孩正在洗手台前拿起牙刷刷牙。", audioText: "Look at the picture and choose the best answer. Statement A: Julia brushes her teeth. Statement B: Julia washes her face. Statement C: Julia's mother brushes her teeth.", options: ["Julia brushes her teeth.", "Julia washes her face.", "Julia's mother brushes her teeth."], ans: 0, tip: "💡【看圖選句】圖中小女孩手拿牙刷在刷牙（brushes her teeth），而不是洗臉（washes her face）。" },
  { part: "Part 1: Photographs", prompt: "Question 2", svgData: window.p1SvgImages.q2, sceneHint: "時鐘指向中午 12:00，Janice 正在餐桌享用午餐。", audioText: "Look at the picture and choose the best answer. Statement A: Janice drinks milk for breakfast. Statement B: Janice has lunch at noon. Statement C: Janice eats fruit for breakfast.", options: ["Janice drinks milk for breakfast.", "Janice has lunch at noon.", "Janice eats fruit for breakfast."], ans: 1, tip: "💡【看圖選句】時鐘指在 12:00 即中午（noon），因此 Janice has lunch at noon 為正確描述。" },
  { part: "Part 1: Photographs", prompt: "Question 3", svgData: window.p1SvgImages.q3, sceneHint: "時鐘上的短針指向 11 前方，長針指向 9（即 10 點 45 分，差一刻到 11 點）。", audioText: "Look at the picture and choose the best answer. Statement A: It's a quarter to 11. Statement B: It's a quarter past 10. Statement C: It's half past 10.", options: ["It's a quarter to 11.", "It's a quarter past 10.", "It's half past 10."], ans: 0, tip: "💡【時間陷阱】10:45 代表『差 15 分鐘到 11 點』，英文表達為 a quarter to 11。" },
  { part: "Part 1: Photographs", prompt: "Question 4", svgData: window.p1SvgImages.q4, sceneHint: "告示看板上寫著棒球比賽（Baseball Game），下方的時間顯示 9:30。", audioText: "Look at the picture and choose the best answer. Statement A: The basketball game starts at 9:30. Statement B: The baseball game starts at 9:30. Statement C: There is no baseball game today.", options: ["The basketball game starts at 9:30.", "The baseball game starts at 9:30.", "There is no baseball game today."], ans: 1, tip: "💡【看圖選句】告示牌上清楚寫著 BASEBALL（棒球），不是籃球（basketball）。" },
  { part: "Part 1: Photographs", prompt: "Question 5", svgData: window.p1SvgImages.q5, sceneHint: "客廳桌子上放著一台電視機，電視上面沒有其他雜物。", audioText: "Look at the picture and choose the best answer. Statement A: There is a television on the table. Statement B: There are some flowers on the TV. Statement C: There is a vase on the floor.", options: ["There is a television on the table.", "There are some flowers on the TV.", "There is a vase on the floor."], ans: 0, tip: "💡【看圖選句】桌上放著一台電視機（television on the table），圖中並無花朵或花瓶。" },
  { part: "Part 1: Photographs", prompt: "Question 6", svgData: window.p1SvgImages.q6, sceneHint: "Andy 的行事曆上吉他練習旁標註著很少出現的記號（極低頻率）。", audioText: "Look at the picture and choose the best answer. Statement A: Andy rarely plays the guitar. Statement B: Andy never goes to science class. Statement C: Andy always goes to English class.", options: ["Andy rarely plays the guitar.", "Andy never goes to science class.", "Andy always goes to English class."], ans: 0, tip: "💡【頻率副詞】rarely 代表『很少/幾乎不』。行事曆顯示一年才彈一次吉他，符合 rare 的低頻率特徵。" },
  { part: "Part 1: Photographs", prompt: "Question 7", svgData: window.p1SvgImages.q7, sceneHint: "Susan 野餐墊上的食物籃裝著熱狗、薯條和餅乾（Hot dogs, French fries, cookies）。", audioText: "Look at the picture and choose the best answer. Statement A: Susan has sausages, sandwiches and French fries for her picnic. Statement B: Susan has hot dogs, French fries, and cookies for her picnic. Statement C: Susan has noodles, milk, and hot dogs for her picnic.", options: ["Susan has sausages, sandwiches and French fries for her picnic.", "Susan has hot dogs, French fries, and cookies for her picnic.", "Susan has noodles, milk, and hot dogs for her picnic."], ans: 1, tip: "💡【細節辨識】食物籃裝的是熱狗（hot dogs）、薯條（French fries）與餅乾（cookies）。" },
  { part: "Part 1: Photographs", prompt: "Question 8", svgData: window.p1SvgImages.q8, sceneHint: "客廳裡，Henry 的媽媽正拿著畫筆在畫布上畫畫（Henry's mother is drawing）。", audioText: "Look at the picture and choose the best answer. Statement A: Henry's hobby is swimming. Statement B: Henry's father's hobby is drawing. Statement C: Henry's mother's hobby is drawing.", options: ["Henry's hobby is swimming.", "Henry's father's hobby is drawing.", "Henry's mother's hobby is drawing."], ans: 2, tip: "💡【人物辨識】圖中畫畫的人物是媽媽（mother），不是爸爸（father）。" },
  { part: "Part 1: Photographs", prompt: "Question 9", svgData: window.p1SvgImages.q9, sceneHint: "餐廳門口牆上貼著顯眼的『禁止吸煙（No Smoking）』標誌。", audioText: "Look at the picture and choose the best answer. Statement A: Please don't smoke outside. Statement B: Please don't speak too loud here. Statement C: Please don't smoke in the restaurant.", options: ["Please don't smoke outside.", "Please don't speak too loud here.", "Please don't smoke in the restaurant."], ans: 2, tip: "💡【指示標誌】此標誌為『禁止吸菸』，且位於餐廳室內牆面，故選 Please don't smoke in the restaurant。" },
  { part: "Part 1: Photographs", prompt: "Question 10", svgData: window.p1SvgImages.q10, sceneHint: "餐盤上放著金黃色的玉米粒（Corn）。", audioText: "Look at the picture and choose the best answer. Statement A: There is not anything on the plate. Statement B: There is some corn on the plate. Statement C: There are no sausages on the plate.", options: ["There is not anything on the plate.", "There is some corn on the plate.", "There are no sausages on the plate."], ans: 1, tip: "💡【名詞與存在句】盤子上有金黃色玉米（There is some corn on the plate）。" },
  { part: "Part 1: Photographs", prompt: "Question 11", svgData: window.p1SvgImages.q11, sceneHint: "體操女孩展現特技動作：一隻腳著地，另一隻腳高高舉起彎曲碰到自己的頭頂。", audioText: "Look at the picture and choose the best answer. Statement A: She can touch her head with her foot. Statement B: She can stand on one leg and touch the floor. Statement C: She can stand on her head.", options: ["She can touch her head with her foot.", "She can stand on one leg and touch the floor.", "She can stand on her head."], ans: 0, tip: "💡【動作辨析】女孩正在用腳碰觸自己的頭部（touch her head with her foot）。" },
  { part: "Part 2: Question Response", prompt: "Question 12: Are there many students in the classroom?", audioText: "Question 12: Are there many students in the classroom? Statement A: Yes, there are 30 students in the classroom. Statement B: No, the classroom is very big. Statement C: I like to study in the classroom.", options: ["Yes, there are 30 students in the classroom.", "No. The classroom is very big.", "I like to study in the classroom."], ans: 0, tip: "💡【存在句問答】Are there many students... 問教室學生多嗎？回答 Yes, there are 30 students 最切題。" },
  { part: "Part 2: Question Response", prompt: "Question 13: Where do you cook?", audioText: "Question 13: Where do you cook? Statement A: I have a big kitchen. Statement B: I cook in the kitchen. Statement C: I take a bath in the bathroom.", options: ["I have a big kitchen.", "I cook in the kitchen.", "I take a bath in the bathroom."], ans: 1, tip: "💡【疑問詞 Where】問做菜地點，回答必須包含動作與地點（I cook in the kitchen）。" },
  { part: "Part 2: Question Response", prompt: "Question 14: What does Tina have?", audioText: "Question 14: What does Tina have? Statement A: She has a new car. Statement B: She needs a bike. Statement C: The books on her desk are mine.", options: ["She has a new car.", "She needs a bike.", "The books on her desk are mine."], ans: 0, tip: "💡【一般現在式問答】問 Tina 有什麼，回答需用 She has...（She has a new car）。" },
  { part: "Part 2: Question Response", prompt: "Question 15: How many seconds are there in a minute?", audioText: "Question 15: How many seconds are there in a minute? Statement A: There are 16 seconds in a minute. Statement B: There are 60 seconds in a minute. Statement C: There are 60 minutes in an hour.", options: ["There are 16 seconds in a minute.", "There are 60 seconds in a minute.", "There are 60 minutes in an hour."], ans: 1, tip: "💡【常識與數字】一分鐘有 60 秒（60 seconds in a minute）。" },
  { part: "Part 2: Question Response", prompt: "Question 16: What floor do your parents live on?", audioText: "Question 16: What floor do your parents live on? Statement A: I live on the eighth floor. Statement B: She lives on the 9th floor. Statement C: They live on the 2nd floor.", options: ["I live on the eighth floor.", "She lives on the 9th floor.", "They live on the 2nd floor."], ans: 2, tip: "💡【主詞人稱一致】your parents 是複數代名詞 they，回答必須用 They live on the 2nd floor。" },
  { part: "Part 2: Question Response", prompt: "Question 17: May I borrow some money?", audioText: "Question 17: May I borrow some money? Statement A: Sure, how much do you need? Statement B: Sure, how many do you want? Statement C: No, I don't need money.", options: ["Sure, how much do you need?", "Sure. How many do you want?", "No, I don't need money."], ans: 0, tip: "💡【不可數名詞】money（錢）為不可數，反問要借多少時必須用 How much do you need。" },
  { part: "Part 2: Question Response", prompt: "Question 18: Where are you doing your homework?", audioText: "Question 18: Where are you doing your homework? Statement A: You are doing your homework in front of the television. Statement B: I am playing the piano in the dining room. Statement C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 2, tip: "💡【問答人稱與動作】問 Where are you doing homework?，回答用 I am doing it at my desk in the bedroom。" },
  { part: "Part 2: Question Response", prompt: "Question 19: What can you see on the floor?", audioText: "Question 19: What can you see on the floor? Statement A: Yes, I can see the floor. Statement B: I can clean my room quickly. Statement C: I can see two skirts there.", options: ["Yes, I can see the floor.", "I can clean my room quickly.", "I can see two skirts there."], ans: 2, tip: "💡【特殊疑問詞 What】問在地板上看到什麼物品，回答看到的具體事物（two skirts）。" },
  { part: "Part 2: Question Response", prompt: "Question 20: Are there any pictures on the wall?", audioText: "Question 20: Are there any pictures on the wall? Statement A: No, there are not any pictures. Statement B: He is looking for his pictures. Statement C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0, tip: "💡【存在句簡答】Are there any... 否定簡答為 No, there are not any pictures。" },
  { part: "Part 2: Question Response", prompt: "Question 21: Where are you going to watch the movie?", audioText: "Question 21: Where are you going to watch the movie? Statement A: I am doing homework at school. Statement B: At the movie theater. Statement C: I am going to watch TV at home.", options: ["I am doing homework at school.", "At the movie theater.", "I am going to watch TV at home."], ans: 1, tip: "💡【地點回答】問去哪裡看電影，最直接合適的地點回答是 At the movie theater。" },
  { part: "Part 2: Question Response", prompt: "Question 22: People are trembling in their seats in the movie theater.", audioText: "Question 22: People are trembling in their seats in the movie theater. Statement A: They are watching a horror movie. Statement B: They are watching an adventure movie. Statement C: They are dreaming.", options: ["They are watching a horror movie.", "They are watching an adventure movie.", "They are dreaming."], ans: 0, tip: "💡【單字因果推論】tremble 代表發抖打顫，在電影院裡發抖代表正在觀看恐怖電影（horror movie）。" },
  { part: "Part 3: Conversations (23-24)", prompt: "Question 23: Is Sally sad?", audioText: `Listen to the conversation. ${p1Conv23_24} Now listen to Question 23: Is Sally sad?`, options: ["Yes, she is not sad.", "Yes, she is sad.", "No, she is happy."], ans: 1, repeat: true, tip: "💡【情意判斷】Sally 提到 I am not feeling good 且父母無法參加派對，因此 Yes, she is sad。" },
  { part: "Part 3: Conversations (23-24)", prompt: "Question 24: Why can't Sally's parents go to her birthday party?", audioText: `Listen to the conversation. ${p1Conv23_24} Now listen to Question 24: Why can't Sally's parents go to her birthday party?`, options: ["They will go to Sally's birthday party.", "They will go to work.", "They will come from America."], ans: 1, tip: "💡【因果細節】Sally 清楚說明 They need to fly to America to work，所以原因為 They will go to work。" },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 25: What kind of movies does Helen like?", audioText: `Listen to the conversation. ${p1Conv25_27} Now listen to Question 25: What kind of movies does Helen like?`, options: ["She wants to watch a movie with Paul.", "She likes science fiction movies.", "She likes romance movies."], ans: 1, repeat: true, tip: "💡【喜好抓取】Helen 說 I want to see a science fiction movie（科幻電影）。" },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 26: Why does Helen have to run?", audioText: `Listen to the conversation. ${p1Conv25_27} Now listen to Question 26: Why does Helen have to run?`, options: ["She likes to run.", "She likes science fiction movies.", "The movie is about to start."], ans: 2, tip: "💡【原因細節】Helen 說 the movie is about to start（電影快要開演了）。" },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 27: Do Paul and Helen see the movie together?", audioText: `Listen to the conversation. ${p1Conv25_27} Now listen to Question 27: Do Paul and Helen see the movie together?`, options: ["Yes, they do.", "No, they aren't.", "No, they don't."], ans: 2, tip: "💡【助動詞簡答】Paul 說自己中午前必須回家，兩人並未一起看電影，故用 No, they don't。" },
  { part: "Part 4: Talks (28-30)", prompt: "Question 28: What kind of books does Kathy not read?", audioText: `Listen to the talk. ${p1Talk28_30} Now listen to Question 28: What kind of books does Kathy not read in her free time?`, options: ["Chinese books.", "Science books.", "Math books."], ans: 2, repeat: true, tip: "💡【反向細節】文章提到 Chinese, science, English books，唯獨沒有提到數學書（Math books）。" },
  { part: "Part 4: Talks (28-30)", prompt: "Question 29: What kind of sport is Kathy learning now?", audioText: `Listen to the talk. ${p1Talk28_30} Now listen to Question 29: What kind of sport is Kathy learning now?`, options: ["Basketball", "Badminton", "Football"], ans: 1, tip: "💡【現在進行細節】文章說明 Now she is learning how to play badminton（羽毛球）。" },
  { part: "Part 4: Talks (28-30)", prompt: "Question 30: Why is Kathy thin?", audioText: `Listen to the talk. ${p1Talk28_30} Now listen to Question 30: Why is Kathy thin?`, options: ["Because she runs a lot and eats a little.", "Because she doesn't eat.", "Because she likes eating hamburgers."], ans: 0, tip: "💡【因果細節】文章說明 She is thin because she runs in the park every day and doesn't eat too much。" },
  { part: "Part 4: Talks (31-32)", prompt: "Question 31: What does Henry like to do in his free time?", audioText: `Listen to the talk. ${p1Talk31_32} Now listen to Question 31: What does Henry like to do in his free time?`, options: ["To swim", "To study English", "To play basketball"], ans: 0, repeat: true, tip: "💡【喜好辨析】Henry 開頭即說 In my free time, I like to swim。" },
  { part: "Part 4: Talks (31-32)", prompt: "Question 32: Where is Henry now?", audioText: `Listen to the talk. ${p1Talk31_32} Now listen to Question 32: Where is Henry now?`, options: ["In the living room.", "In the classroom.", "In the dining room."], ans: 1, tip: "💡【情境推理】結尾提到 please tell me after class，代表目前在教室（classroom）。" },
  { part: "Part 4: Talks (33-35)", prompt: "Question 33: Who lives with Jerry?", audioText: `Listen to the talk. ${p1Talk33_35} Now listen to Question 33: Who lives with Jerry?`, options: ["Jerry lives with his parents.", "Jerry lives with his classmate.", "Jerry lives with his teammate."], ans: 1, repeat: true, tip: "💡【同住人物】Jerry 說 I live in a small apartment with my classmate。" },
  { part: "Part 4: Talks (33-35)", prompt: "Question 34: How many bathrooms are there in Jerry's house?", audioText: `Listen to the talk. ${p1Talk33_35} Now listen to Question 34: How many bathrooms are there in Jerry's house?`, options: ["2", "1", "0"], ans: 1, tip: "💡【數量細節】兩人必須共用浴室（share the bathroom），代表只有 1 間浴室。" },
  { part: "Part 4: Talks (33-35)", prompt: "Question 35: Why does Jerry feel the morning is difficult?", audioText: `Listen to the talk. ${p1Talk33_35} Now listen to Question 35: Why does Jerry feel the morning is difficult?`, options: ["Because he can't use the bathroom.", "Because the bathroom is dirty.", "Because he does not want to go to school."], ans: 0, tip: "💡【原因推論】室友早上佔用浴室很久導致 Jerry 無法使用，因此覺得早上很困擾。" },
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 36: Whose birthday is coming?", audioText: `Listen to the conversation. ${p1Conv36_37} Now listen to Question 36: Whose birthday is coming?`, options: ["Stephen's birthday is coming.", "Tina's birthday is coming.", "Steven's father's birthday is coming."], ans: 0, repeat: true, tip: "💡【人物關係】Tina 說 I can't go to YOUR birthday party，因此過生日的是 Stephen。" },
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 37: Why do Tina's parents need to go to Singapore?", audioText: `Listen to the conversation. ${p1Conv36_37} Now listen to Question 37: Why do Tina's parents need to go to Singapore?`, options: ["Because they want to celebrate a birthday.", "Because they have to work in Singapore.", "Because they study in Singapore."], ans: 1, tip: "💡【原因細節】Tina 說明 My parents will go to Singapore for work。" },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 38: What does Stephen think of his parents?", audioText: `Listen to the conversation. ${p1Conv38_40} Now listen to Question 38: What does Stephen think of his parents?`, options: ["His parents usually listen to him.", "His parents sometimes listen to him.", "His parents never listen to him."], ans: 2, repeat: true, tip: "💡【頻率詞細節】對話中提到 I feel they NEVER listen to me。" },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 39: Who does Stephen want to live with?", audioText: `Listen to the conversation. ${p1Conv38_40} Now listen to Question 39: Who does Stephen want to live with?`, options: ["His parents.", "His brother.", "His grandparents."], ans: 2, tip: "💡【人物細節】Stephen 提到 My grandparents live near us. I can live with them。" },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 40: What does Tina tell Stephen to do?", audioText: `Listen to the conversation. ${p1Conv38_40} Now listen to Question 40: What does Tina tell Stephen to do?`, options: ["She tells Stephen to tell his parents about his plan.", "She tells Stephen not to tell his parents about his plan.", "She tells Stephen to tell his brother about his plan."], ans: 0, tip: "💡【建議抓取】Tina 建議 I think you should tell your parents about your plan。" }
];

window.rawMockP1 = window.rawMockP1Data.map(function(item, idx) {
  return Object.assign({}, item, { module: "listening", qId: generateQuestionHash("p1_" + idx + "_" + item.prompt) });
});

// =======================================================================
// Practice 2 真題資料庫
// =======================================================================
const p2Conv31_33 = "Kevin, what are you doing? I'm playing a video game, Mom. Is your homework done? I can't do my homework now because I can't stop this game before I win. Then I can stop the game for you. Now do your homework before dinner.";
const p2Conv34_35 = "How are you, Lucy? Not bad. What about you? Great. I haven't seen you for a week. You know, I lived with my parents, but they moved to London. So I live in a big house alone.";
const p2Conv36_38 = "Hi, Lucy, your birthday is coming. Do you want to have a birthday party? Sure. We can invite some friends. Who do you want to invite? Jerry, Susan, and Henry. Okay. Sounds good. I will help you prepare your birthday party. Thanks. I need the help.";
const p2Conv39_40 = "Hi Helen. Where are you going? I am going to watch a movie. Really? What kind of movie are you going to watch? I want to see a science fiction movie. I have to run now. The movie is about to start. Okay, and I have to be home before lunch. See you.";
const p2Talk41_42 = "Hello everyone, today I'd like to tell you something about my English studies. My name is Henry. I am from Japan. I am a student at Gram English. I like to study English very much, but my spoken English is not good. When I say R, I find it difficult to say it right.";
const p2Talk43_45 = "Frank and Maggie are my good friends. They can do many things. Frank can play the piano and guitar. He can also ride a bicycle, but he can't drive a car. Maggie is very talented. She can sing and dance very well. She likes to practice Kung Fu on Mondays. We often do our homework together before dinner. Then, after dinner, we play video games. We can all speak English very well.";
const p2Talk46_47 = "People like to watch movies in different places. For example, some people like to watch movies in the theater, library, or restaurant. But I like to watch movies at home. People who like to watch movies in the theater like to be around many people.";
const p2Talk48_50 = "Hi Jane, it's Sandy. I have to study for my English test and I need your help. Can you come to my house today? We can have dinner together at 6:00, and we can study at 6:30 until 8:00. Then we can watch TV. Thanks.";

window.rawMockP2Data = [
  { part: "Part 1: Photographs", prompt: "Question 1", svgData: window.p2SvgImages.q1, sceneHint: "房間裡的床上整齊擺放著兩顆枕頭（Two pillows on the bed）。", audioText: "Look at the picture and choose the best answer. Statement A: There is a shirt in the closet. Statement B: There are two pillows on the bed. Statement C: There is a clock on the wall.", options: ["There is a shirt in the closet.", "There are two pillows on the bed.", "There is a clock on the wall."], ans: 1, tip: "💡【看圖選句】床上清楚擺放著兩顆枕頭（two pillows on the bed）。" },
  { part: "Part 1: Photographs", prompt: "Question 2", svgData: window.p2SvgImages.q2, sceneHint: "一群人在櫃檯前依序排隊等待（Waiting in line）。", audioText: "Look at the picture and choose the best answer. Statement A: They are waiting in line. Statement B: They are in the movie theater. Statement C: They are shutting their eyes.", options: ["They are waiting in line.", "They are in the movie theater.", "They are shutting their eyes."], ans: 0, tip: "💡【片語辨析】圖中人們一個接著一個站著，代表在排隊（waiting in line）。" },
  { part: "Part 1: Photographs", prompt: "Question 3", svgData: window.p2SvgImages.q3, sceneHint: "街道地圖上，超級市場（Supermarket）緊鄰在郵局（Post office）的隔壁旁邊。", audioText: "Look at the picture and choose the best answer. Statement A: The hospital is beside the restaurant. Statement B: The supermarket is next to the post office. Statement C: The supermarket is between the hospital and the restaurant.", options: ["The hospital is beside the restaurant.", "The supermarket is next to the post office.", "The supermarket is between the hospital and the restaurant."], ans: 1, tip: "💡【空間介系詞】圖中超市與郵局緊緊相鄰，使用 next to（在旁邊）。" },
  { part: "Part 1: Photographs", prompt: "Question 4", svgData: window.p2SvgImages.q4, sceneHint: "小女孩坐在電腦螢幕前抓著頭，一臉困惑完全不會操作電腦（Doesn't know how to use it）。", audioText: "Look at the picture and choose the best answer. Statement A: She doesn't know how to use the computer. Statement B: She can use the computer very well. Statement C: She is playing the computer games happily.", options: ["She doesn't know how to use the computer.", "She can use the computer very well.", "She is playing the computer games happily."], ans: 0, tip: "💡【情緒與能力】小女孩滿臉問號且困惑，代表她不會使用電腦（doesn't know how to use the computer）。" },
  { part: "Part 1: Photographs", prompt: "Question 5", svgData: window.p2SvgImages.q5, sceneHint: "名叫 Tina 的女孩張開嘴巴打了一個大哈欠（Tina yawns）。", audioText: "Look at the picture and choose the best answer. Statement A: Tina yawns. Statement B: Jennifer yawns. Statement C: Tina stretches.", options: ["Tina yawns.", "Jennifer yawns.", "Tina stretches."], ans: 0, tip: "💡【動作單字】yawn 為打哈欠，stretch 為伸懶腰。圖中主角正在打哈欠。" },
  { part: "Part 1: Photographs", prompt: "Question 6", svgData: window.p2SvgImages.q6, sceneHint: "時鐘指在 4 點 45 分（即差一刻鐘到 5 點：a quarter to 5）。", audioText: "Look at the picture and choose the best answer. Statement A: It's 10 past 5. Statement B: It's a quarter past 5. Statement C: It's a quarter to 5.", options: ["It's 10 past 5.", "It's a quarter past five.", "It's a quarter to five."], ans: 2, tip: "💡【時間讀法】4:45 代表『差一刻到 5 點』，表達為 a quarter to 5。" },
  { part: "Part 1: Photographs", prompt: "Question 7", svgData: window.p2SvgImages.q7, sceneHint: "臥室的床邊擺放著一張舒適的沙發椅（Sofa in the bedroom）。", audioText: "Look at the picture and choose the best answer. Statement A: There is a radio on the table. Statement B: There is a hanger on the coffee table. Statement C: There is a sofa in the bedroom.", options: ["There is a radio on the table.", "There is a hanger on the coffee table.", "There is a sofa in the bedroom."], ans: 2, tip: "💡【家具與空間】房間裡除了床以外，還擺放著一張沙發（sofa in the bedroom）。" },
  { part: "Part 1: Photographs", prompt: "Question 8", svgData: window.p2SvgImages.q8, sceneHint: "餐廳室內牆面上標記著醒目的紅色『禁止吸煙』告示牌。", audioText: "Look at the picture and choose the best answer. Statement A: Please don't speak too loud here. Statement B: Please don't smoke in the restaurant. Statement C: Please don't smoke outside.", options: ["Please don't speak too loud here.", "Please don't smoke in the restaurant.", "Please don't smoke outside."], ans: 1, tip: "💡【告示牌】餐廳內的禁菸標誌，選 Please don't smoke in the restaurant。" },
  { part: "Part 1: Photographs", prompt: "Question 9", svgData: window.p2SvgImages.q9, sceneHint: "小男孩坐在桌子前拿著色筆專注地在紙上畫圖（The boy is drawing）。", audioText: "Look at the picture and choose the best answer. Statement A: The girl is watching television. Statement B: The boy is drawing. Statement C: The man is flying a kite.", options: ["The girl is watching television.", "The boy is drawing.", "The man is flying a kite."], ans: 1, tip: "💡【人物與動作】圖中是小男孩（boy）正在畫畫（drawing）。" },
  { part: "Part 1: Photographs", prompt: "Question 10", svgData: window.p2SvgImages.q10, sceneHint: "餐桌上端著一碗熱騰騰冒煙的麵條，正是主角最愛的食物（Noodles）。", audioText: "Look at the picture and choose the best answer. Statement A: My favorite food is noodles. Statement B: My father's favorite food is hamburgers. Statement C: My mother's favorite food is sandwiches.", options: ["My favorite food is noodles.", "My father's favorite food is hamburgers.", "My mother's favorite food is sandwiches."], ans: 0, tip: "💡【食物單字】碗裡裝的是麵條（noodles），不是漢堡或三明治。" },
  { part: "Part 2: Question Response", prompt: "Question 11: Do you have many friends here?", audioText: "Question 11: Do you have many friends here? Statement A: I often go swimming with my friends. Statement B: I am friendly. Statement C: No, I don't have many friends here.", options: ["I often go swimming with my friends.", "I am friendly.", "No, I don't have many friends here."], ans: 2, tip: "💡【一般疑問句簡答】Do you have... 提問，最適當的回答是 No, I don't have many friends here。" },
  { part: "Part 2: Question Response", prompt: "Question 12: What time do you usually go to school?", audioText: "Question 12: What time do you usually go to school? Statement A: You usually go to school at 7:00. Statement B: I usually go to school at half past 7:00. Statement C: I usually go to school on time.", options: ["You usually go to school at 7:00.", "I usually go to school at half past 7:00.", "I usually go to school on time."], ans: 1, tip: "💡【時間問答】問具體幾點（What time），回答用 I usually go to school at half past 7:00 (7:30)。" },
  { part: "Part 2: Question Response", prompt: "Question 13: What is Sandy's favorite sport?", audioText: "Question 13: What is Sandy's favorite sport? Statement A: Her favorite food is vegetables. Statement B: Her favorite sport is bowling. Statement C: Her favorite fruit is strawberries.", options: ["Her favorite food is vegetables.", "Her favorite sport is bowling.", "Her favorite fruit is strawberries."], ans: 1, tip: "💡【主題詞辨析】問的是 favorite sport（最喜歡的運動），只有 bowling（保齡球）是運動項目。" },
  { part: "Part 2: Question Response", prompt: "Question 14: How many lamps can you see?", audioText: "Question 14: How many lamps can you see? Statement A: Yes, I do. Statement B: I can see three bags. Statement C: I can see five lamps.", options: ["Yes, I do.", "I can see three bags.", "I can see five lamps."], ans: 2, tip: "💡【數量問答】問能看見幾盞檯燈（lamps），回答需對應物品名稱（I can see five lamps）。" },
  { part: "Part 2: Question Response", prompt: "Question 15: Where are you doing your homework?", audioText: "Question 15: Where are you doing your homework? Statement A: You are doing your homework in front of the television. Statement B: I am playing the piano in the dining room. Statement C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 2, tip: "💡【地點問答】問你在哪裡做作業，回答用 I am doing it at my desk in the bedroom。" },
  { part: "Part 2: Question Response", prompt: "Question 16: Are there any pictures on the wall?", audioText: "Question 16: Are there any pictures on the wall? Statement A: No, there are not any pictures. Statement B: He is looking for his pictures. Statement C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0, tip: "💡【存在句簡答】Are there any... 否定簡答為 No, there are not any pictures。" },
  { part: "Part 2: Question Response", prompt: "Question 17: Are you listening to me?", audioText: "Question 17: Are you listening to me? Statement A: Yes, you are listening to me. Statement B: Yes, I am listening to you. Statement C: No, he is not listening to us.", options: ["Yes, you are listening to me.", "Yes, I am listening to you.", "No, he is not listening to us."], ans: 1, tip: "💡【人稱呼應】問句是 Are you listening to me?，回答必須以第一人稱回覆：Yes, I am listening to you。" },
  { part: "Part 2: Question Response", prompt: "Question 18: What is she doing?", audioText: "Question 18: What is she doing? Statement A: She is playing the guitar. Statement B: You are cooking in the kitchen. Statement C: She does her homework every evening.", options: ["She is playing the guitar.", "You are cooking in the kitchen.", "She does her homework every evening."], ans: 0, tip: "💡【時態與人稱】問現在進行式（What is she doing），回答必須用 She is + V-ing（She is playing the guitar）。" },
  { part: "Part 2: Question Response", prompt: "Question 19: Do you have to go to school on time?", audioText: "Question 19: Do you have to go to school on time? Statement A: Yes, I have. Statement B: Yes, I can. Statement C: No, I don't.", options: ["Yes, I have.", "Yes, I can.", "No, I don't."], ans: 2, tip: "💡【助動詞簡答】Do you have to... 是一般動詞問句，否定簡答使用 No, I don't。" },
  { part: "Part 2: Question Response", prompt: "Question 20: Thank you very much.", audioText: "Question 20: Thank you very much. Statement A: No thanks. Statement B: You're welcome. Statement C: I think so.", options: ["No thanks.", "You're welcome.", "I think so."], ans: 1, tip: "💡【社交禮貌應答】別人道謝 Thank you 時，標準客氣回覆為 You're welcome（不客氣）。" },
  { part: "Part 2: Question Response", prompt: "Question 21: May I borrow some money?", audioText: "Question 21: May I borrow some money? Statement A: Sure, how many do you want? Statement B: Sure, how much do you need? Statement C: No, I don't need money.", options: ["Sure, how many do you want?", "Sure. How much do you need?", "No, I don't need money."], ans: 1, tip: "💡【不可數名詞數量】money 為不可數，詢問數量要用 how much do you need。" },
  { part: "Part 2: Question Response", prompt: "Question 22: What does Tina have?", audioText: "Question 22: What does Tina have? Statement A: She has a new car. Statement B: The books on her desk are mine. Statement C: She needs a bike.", options: ["She has a new car.", "The books on her desk are mine.", "She needs a bike."], ans: 0, tip: "💡【問答一致性】問 Tina 擁有什麼，回答為 She has a new car。" },
  { part: "Part 2: Question Response", prompt: "Question 23: Is there a car in the garage?", audioText: "Question 23: Is there a car in the garage? Statement A: Yes, I am. Statement B: Yes, there is. Statement C: He is sick.", options: ["Yes, I am.", "Yes, there is.", "He is sick."], ans: 1, tip: "💡【存在句簡答】Is there... 肯定簡答為 Yes, there is。" },
  { part: "Part 2: Question Response", prompt: "Question 24: Are Mike and Jason washing their cars?", audioText: "Question 24: Are Mike and Jason washing their cars? Statement A: No, he is not. Statement B: Yes, he is. Statement C: No, they aren't.", options: ["No, he is not.", "Yes, he is.", "No, they aren't."], ans: 2, tip: "💡【複數代名詞】Mike and Jason 為兩個人，否定簡答必須用 No, they aren't。" },
  { part: "Part 2: Question Response", prompt: "Question 25: Can Tony do kung fu?", audioText: "Question 25: Can Tony do kung fu? Statement A: Yes, he can. Statement B: Yes, I do. Statement C: Yes, I can.", options: ["Yes, he can.", "Yes, I do.", "Yes, I can."], ans: 0, tip: "💡【情態助動詞簡答】Can Tony... 提問，肯定簡答使用 Yes, he can。" },
  { part: "Part 2: Question Response", prompt: "Question 26: Is there any shampoo?", audioText: "Question 26: Is there any shampoo? Statement A: No, I don't. Statement B: Yes, there are. Statement C: Yes, there is.", options: ["No, I don't.", "Yes, there are.", "Yes, there is."], ans: 2, tip: "💡【不可數存在句】shampoo（洗髮精）為不可數名詞，be 動詞用單數，肯定簡答為 Yes, there is。" },
  { part: "Part 2: Question Response", prompt: "Question 27: How much sugar do you want?", audioText: "Question 27: How much sugar do you want? Statement A: Just a little. Statement B: Too much. Statement C: Not many.", options: ["Just a little.", "Too much.", "Not many."], ans: 0, tip: "💡【不可數修飾詞】sugar（糖）不可數，數量少用 a little（一點點）回答，不能用 many。" },
  { part: "Part 2: Question Response", prompt: "Question 28: What is Timmy doing?", audioText: "Question 28: What is Timmy doing? Statement A: He doesn't shut his eyes because the movie is scary. Statement B: He is shutting his eyes because of the scary movie. Statement C: He shuts his eyes at scary movies.", options: ["He doesn't shut his eyes because the movie is scary.", "He is shutting his eyes because of the scary movie.", "He shuts his eyes at scary movies."], ans: 1, tip: "💡【時態對齊】問 What is Timmy doing，回答需用進行式 He is shutting his eyes。" },
  { part: "Part 2: Question Response", prompt: "Question 29: Do you always do your homework before dinner?", audioText: "Question 29: Do you always do your homework before dinner? Statement A: Yes, I never eat first. Statement B: Yes, it is always late when I do it. Statement C: Yes, always do my homework.", options: ["Yes, I never eat first.", "Yes, it is always late when I do it.", "Yes, always do my homework."], ans: 0, tip: "💡【邏輯常理】做完功課才吃晚餐，代表『從來不會先吃飯』（I never eat first）。" },
  { part: "Part 2: Question Response", prompt: "Question 30: What is the girl doing?", audioText: "Question 30: What is the girl doing? Statement A: The girl is sick. Statement B: The girl is painting. Statement C: Her favorite sport is soccer.", options: ["The girl is sick.", "The girl is painting.", "Her favorite sport is soccer."], ans: 1, tip: "💡【動作進行式】問女孩正在做什麼，回答為 The girl is painting（正在畫畫）。" },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 31: What does Kevin's mom want him to do now?", audioText: `Listen to the conversation. ${p2Conv31_33} Now listen to Question 31: What does Kevin's mom want him to do now?`, options: ["Do his homework.", "Win the game.", "Eat dinner first."], ans: 0, repeat: true, tip: "💡【媽媽要求】媽媽最後清楚命令：Now do your homework before dinner。" },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 32: What does Kevin want to do?", audioText: `Listen to the conversation. ${p2Conv31_33} Now listen to Question 32: What does Kevin want to do?`, options: ["Do his homework.", "Win the game before stopping.", "Help his mom cook dinner."], ans: 1, tip: "💡【兒子想法】Kevin 說 I can't stop this game before I win（贏了才肯罷休）。" },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 33: Does Kevin finish his homework?", audioText: `Listen to the conversation. ${p2Conv31_33} Now listen to Question 33: Does Kevin finish his homework?`, options: ["Yes, he does.", "No, he hasn't done it yet.", "He did it at school."], ans: 1, tip: "💡【作業狀態】Kevin 的作業根本還沒做，故選 No, he hasn't done it yet。" },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 34: How is Lucy?", audioText: `Listen to the conversation. ${p2Conv34_35} Now listen to Question 34: How is Lucy?`, options: ["Very sick.", "Not bad.", "Terrible."], ans: 1, repeat: true, tip: "💡【問候細節】Lucy 回答 Not bad（還不錯）。" },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 35: Who lives with Lucy?", audioText: `Listen to the conversation. ${p2Conv34_35} Now listen to Question 35: Who lives with Lucy?`, options: ["Her parents.", "Her classmates.", "She lives alone."], ans: 2, tip: "💡【同住人物】父母搬去倫敦後，Lucy 說 So I live in a big house ALONE（獨自一人）。" },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 36: What does Lucy want?", audioText: `Listen to the conversation. ${p2Conv36_38} Now listen to Question 36: What does Lucy want?`, options: ["To have a birthday party.", "To go to London.", "To study alone."], ans: 0, repeat: true, tip: "💡【活動目的】Lucy 想要辦生日派對（To have a birthday party）。" },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 37: Whose birthday is coming?", audioText: `Listen to the conversation. ${p2Conv36_38} Now listen to Question 37: Whose birthday is coming?`, options: ["Jack's birthday.", "Lucy's birthday.", "Susan's birthday."], ans: 1, tip: "💡【壽星人物】開頭提到 Hi, Lucy, your birthday is coming，過生日的是 Lucy。" },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 38: How many friends may go to the birthday party with Lucy and Jack?", audioText: `Listen to the conversation. ${p2Conv36_38} Now listen to Question 38: How many friends may go to the birthday party with Lucy and Jack?`, options: ["2 friends.", "3 friends (Jerry, Susan, and Henry).", "5 friends."], ans: 1, tip: "💡【名單清點】Lucy 邀請了 Jerry, Susan, Henry 共 3 位朋友。" },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 39: What kind of movies does Helen like?", audioText: `Listen to the conversation. ${p2Conv39_40} Now listen to Question 39: What kind of movies does Helen like?`, options: ["Romance movies.", "Science fiction movies.", "Horror movies."], ans: 1, repeat: true, tip: "💡【喜好單字】Helen 想要看 science fiction movies（科幻電影）。" },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 40: Why does Helen have to run?", audioText: `Listen to the conversation. ${p2Conv39_40} Now listen to Question 40: Why does Helen have to run?`, options: ["She wants to exercise.", "She needs to catch a bus.", "The movie is about to start."], ans: 2, tip: "💡【原因細節】Helen 說 The movie is about to start（電影即將開始）。" },
  { part: "Part 4: Talks (41-42)", prompt: "Question 41: Where does Henry come from?", audioText: `Listen to the talk. ${p2Talk41_42} Now listen to Question 41: Where does Henry come from?`, options: ["America.", "Singapore.", "Japan."], ans: 2, repeat: true, tip: "💡【國家細節】Henry 自我介紹提到 I am from Japan（日本）。" },
  { part: "Part 4: Talks (42-42)", prompt: "Question 42: Where does he learn English?", audioText: `Listen to the talk. ${p2Talk41_42} Now listen to Question 42: Where does he learn English?`, options: ["At Gram English.", "At school in Japan.", "At home by himself."], ans: 0, tip: "💡【機構名稱】Henry 說 I am a student at Gram English。" },
  { part: "Part 4: Talks (43-45)", prompt: "Question 43: What can't Frank do?", audioText: `Listen to the talk. ${p2Talk43_45} Now listen to Question 43: What can't Frank do?`, options: ["Drive a car.", "Play the guitar.", "Ride a bicycle."], ans: 0, repeat: true, tip: "💡【否定情態轉折】Frank 會彈鋼琴、吉他、騎車，但 he CAN'T drive a car（不會開車）。" },
  { part: "Part 4: Talks (43-45)", prompt: "Question 44: What do the three friends do together?", audioText: `Listen to the talk. ${p2Talk43_45} Now listen to Question 44: What do the three friends do together?`, options: ["Practice kung fu on Mondays.", "Drive cars together.", "Do homework before dinner and play video games after dinner."], ans: 2, tip: "💡【共同活動】文章說明 We often do our homework together before dinner. Then, after dinner, we play video games。" },
  { part: "Part 4: Talks (43-45)", prompt: "Question 45: What are they very good at?", audioText: `Listen to the talk. ${p2Talk43_45} Now listen to Question 45: What are they very good at?`, options: ["They can all play violin.", "They can all speak English very well.", "They can all drive."], ans: 1, tip: "💡【全體能力】文章提到 We can all speak English very well。" },
  { part: "Part 4: Talks (46-47)", prompt: "Question 46: Where does the speaker like to watch movies?", audioText: `Listen to the talk. ${p2Talk46_47} Now listen to Question 46: Where does the speaker like to watch movies?`, options: ["In the theater.", "In the library.", "At home."], ans: 2, repeat: true, tip: "💡【講者偏好】講者說 But I like to watch movies AT HOME（在家看）。" },
  { part: "Part 4: Talks (46-47)", prompt: "Question 47: Why do some people prefer to watch movies in the theater?", audioText: `Listen to the talk. ${p2Talk46_47} Now listen to Question 47: Why do some people prefer to watch movies in the theater?`, options: ["Because tickets are free.", "Because the food is delicious.", "Because they like to be around many people."], ans: 2, tip: "💡【原因抓取】文章最後一句說明 People who like to watch movies in the theater like to be around many people。" },
  { part: "Part 4: Talks (48-50)", prompt: "Question 48: Why does she have to study?", audioText: `Listen to the talk. ${p2Talk48_50} Now listen to Question 48: Why does she have to study?`, options: ["For her English test.", "For her math contest.", "For fun."], ans: 0, repeat: true, tip: "💡【讀書目的】Sandy 留言提到 I have to study for my English test。" },
  { part: "Part 4: Talks (48-50)", prompt: "Question 49: What does Sandy want from Jane?", audioText: `Listen to the talk. ${p2Talk48_50} Now listen to Question 49: What does Sandy want from Jane?`, options: ["To help her study for the English test.", "To buy her dinner.", "To lend her a TV."], ans: 0, tip: "💡【請求內容】Sandy 說 I need your help（需要 Jane 幫忙協助複習英語測驗）。" },
  { part: "Part 5: Talks (48-50)", prompt: "Question 50: Where does Sandy want to study?", audioText: `Listen to the talk. ${p2Talk48_50} Now listen to Question 50: Where does Sandy want to study?`, options: ["At Jane's house.", "At school.", "At Sandy's house."], ans: 2, tip: "💡【地點細節】Sandy 邀請對方 Can you come to MY HOUSE today?，故是在 Sandy 家複習。" }
];

window.rawMockP2 = window.rawMockP2Data.map(function(item, idx) {
  return Object.assign({}, item, { module: "listening", qId: generateQuestionHash("p2_" + idx + "_" + item.prompt) });
});
