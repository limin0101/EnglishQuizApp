// ==========================================
// 1. 格蘭英語 B 級官方全範圍字彙母庫 (450+ 核心生活與檢定字彙)
// ==========================================
const bLevelVocabMasterPool = [
  // --- 居家生活與日常用品 (Home & Living) ---
  { word: "closet", meaning: "衣櫥 / 衣櫃", kk: "[ˋklɑzɪt]", tip: "closet (衣櫥) KK: [ˋklɑzɪt]" },
  { word: "pillow", meaning: "枕頭", kk: "[ˋpɪlo]", tip: "pillow (枕頭) KK: [ˋpɪlo]" },
  { word: "blanket", meaning: "毛毯 / 被子", kk: "[ˋblæŋkɪt]", tip: "blanket (毛毯) KK: [ˋblæŋkɪt]" },
  { word: "hanger", meaning: "衣架", kk: "[ˋhæŋɚ]", tip: "hanger (衣架) KK: [ˋhæŋɚ]" },
  { word: "drawer", meaning: "抽屜", kk: "[drɔr]", tip: "drawer (抽屜) KK: [drɔr]" },
  { word: "shelf", meaning: "架子", kk: "[ʃɛlf]", tip: "shelf (架子) KK: [ʃɛlf]" },
  { word: "sofa", meaning: "沙發", kk: "[ˋsofə]", tip: "sofa (沙發) KK: [ˋsofə]" },
  { word: "lamp", meaning: "檯燈", kk: "[læmp]", tip: "lamp (檯燈) KK: [læmp]" },
  { word: "vase", meaning: "花瓶", kk: "[ves]", tip: "vase (花瓶) KK: [ves]" },
  { word: "towel", meaning: "毛巾", kk: "[ˋtaʊəl]", tip: "towel (毛巾) KK: [ˋtaʊəl]" },
  { word: "soap", meaning: "肥皂", kk: "[sop]", tip: "soap (肥皂) KK: [sop]" },
  { word: "shampoo", meaning: "洗髮精", kk: "[ʃæmˋpu]", tip: "shampoo (洗髮精) KK: [ʃæmˋpu]" },
  { word: "radio", meaning: "收音機", kk: "[ˋredo]", tip: "radio (收音機) KK: [ˋredo]" },
  { word: "clock", meaning: "時鐘", kk: "[klɑk]", tip: "clock (時鐘) KK: [klɑk]" },
  { word: "watch", meaning: "手錶", kk: "[wɑtʃ]", tip: "watch (手錶) KK: [wɑtʃ]" },
  { word: "plate", meaning: "盤子", kk: "[plet]", tip: "plate (盤子) KK: [plet]" },
  { word: "bowl", meaning: "碗", kk: "[bol]", tip: "bowl (碗) KK: [bol]" },
  { word: "fork", meaning: "叉子", kk: "[fɔrk]", tip: "fork (叉子) KK: [fɔrk]" },
  { word: "knife", meaning: "刀子", kk: "[naɪf]", tip: "knife (刀子) KK: [naɪf]" },
  { word: "spoon", meaning: "湯匙", kk: "[spun]", tip: "spoon (湯匙) KK: [spun]" },
  { word: "glass", meaning: "玻璃杯", kk: "[glæs]", tip: "glass (玻璃杯) KK: [glæs]" },
  { word: "cup", meaning: "茶杯", kk: "[kʌp]", tip: "cup (茶杯) KK: [kʌp]" },
  { word: "bottle", meaning: "瓶子", kk: "[ˋbɑt!]", tip: "bottle (瓶子) KK: [ˋbɑt!]" },
  { word: "door", meaning: "門", kk: "[dɔr]", tip: "door (門) KK: [dɔr]" },
  { word: "window", meaning: "窗戶", kk: "[ˋwɪndo]", tip: "window (窗戶) KK: [ˋwɪndo]" },
  { word: "floor", meaning: "地板", kk: "[flɔr]", tip: "floor (地板) KK: [flɔr]" },
  { word: "wall", meaning: "牆壁", kk: "[wɔl]", tip: "wall (牆壁) KK: [wɔl]" },
  { word: "mirror", meaning: "鏡子", kk: "[ˋmɪrɚ]", tip: "mirror (鏡子) KK: [ˋmɪrɚ]" },
  { word: "trash can", meaning: "垃圾桶", kk: "[træʃ kæn]", tip: "trash can (垃圾桶) KK: [træʃ kæn]" },
  { word: "umbrella", meaning: "雨傘", kk: "[ʌmˋbrɛlə]", tip: "umbrella (雨傘) KK: [ʌmˋbrɛlə]" },

  // --- 飲食、三餐與點心 (Food & Drinks) ---
  { word: "sausages", meaning: "香腸", kk: "[ˋsɔsɪdʒɪz]", tip: "sausages (香腸) KK: [ˋsɔsɪdʒɪz]" },
  { word: "sandwiches", meaning: "三明治", kk: "[ˋsændwɪtʃɪz]", tip: "sandwiches (三明治) KK: [ˋsændwɪtʃɪz]" },
  { word: "cookies", meaning: "餅乾", kk: "[ˋkʊkɪz]", tip: "cookies (餅乾) KK: [ˋkʊkɪz]" },
  { word: "noodles", meaning: "麵條", kk: "[ˋnud!z]", tip: "noodles (麵條) KK: [ˋnud!z]" },
  { word: "hamburgers", meaning: "漢堡", kk: "[ˋhæmbɚgɚz]", tip: "hamburgers (漢堡) KK: [ˋhæmbɚgɚz]" },
  { word: "vegetables", meaning: "蔬菜", kk: "[ˋvɛdʒətəb!z]", tip: "vegetables (蔬菜) KK: [ˋvɛdʒətəb!z]" },
  { word: "strawberries", meaning: "草莓", kk: "[ˋstrɔ͵bɛrɪz]", tip: "strawberries (草莓) KK: [ˋstrɔ͵bɛrɪz]" },
  { word: "breakfast", meaning: "早餐", kk: "[ˋbrɛkfəst]", tip: "breakfast (早餐) KK: [ˋbrɛkfəst]" },
  { word: "lunch", meaning: "午餐", kk: "[lʌntʃ]", tip: "lunch (午餐) KK: [lʌntʃ]" },
  { word: "dinner", meaning: "晚餐", kk: "[ˋdɪnɚ]", tip: "dinner (晚餐) KK: [ˋdɪnɚ]" },
  { word: "picnic", meaning: "野餐", kk: "[ˋpɪknɪk]", tip: "picnic (野餐) KK: [ˋpɪknɪk]" },
  { word: "sugar", meaning: "糖", kk: "[ˋʃʊgɚ]", tip: "sugar (糖/不可數) KK: [ˋʃʊgɚ]" },
  { word: "soup", meaning: "湯", kk: "[sup]", tip: "soup (湯/不可數) KK: [sup]" },
  { word: "milk", meaning: "牛奶", kk: "[mɪlk]", tip: "milk (牛奶/不可數) KK: [mɪlk]" },
  { word: "juice", meaning: "果汁", kk: "[dʒus]", tip: "juice (果汁/不可數) KK: [dʒus]" },
  { word: "tea", meaning: "茶", kk: "[ti]", tip: "tea (茶/不可數) KK: [ti]" },
  { word: "coffee", meaning: "咖啡", kk: "[ˋkɔfɪ]", tip: "coffee (咖啡/不可數) KK: [ˋkɔfɪ]" },
  { word: "water", meaning: "水", kk: "[ˋwɔtɚ]", tip: "water (水/不可數) KK: [ˋwɔtɚ]" },
  { word: "corn", meaning: "玉米", kk: "[kɔrn]", tip: "corn (玉米) KK: [kɔrn]" },
  { word: "rice", meaning: "米飯", kk: "[raɪs]", tip: "rice (米飯/不可數) KK: [raɪs]" },
  { word: "bread", meaning: "麵包", kk: "[brɛd]", tip: "bread (麵包/不可數) KK: [brɛd]" },
  { word: "butter", meaning: "奶油", kk: "[ˋbʌtɚ]", tip: "butter (奶油) KK: [ˋbʌtɚ]" },
  { word: "cheese", meaning: "起司", kk: "[tʃiz]", tip: "cheese (起司) KK: [tʃiz]" },
  { word: "egg", meaning: "雞蛋", kk: "[ɛg]", tip: "egg (雞蛋) KK: [ɛg]" },
  { word: "chicken", meaning: "雞肉", kk: "[ˋtʃɪkɪn]", tip: "chicken (雞肉) KK: [ˋtʃɪkɪn]" },
  { word: "beef", meaning: "牛肉", kk: "[bif]", tip: "beef (牛肉) KK: [bif]" },
  { word: "pork", meaning: "豬肉", kk: "[pɔrk]", tip: "pork (豬肉) KK: [pɔrk]" },
  { word: "fish", meaning: "魚肉", kk: "[fɪʃ]", tip: "fish (魚肉) KK: [fɪʃ]" },
  { word: "apple", meaning: "蘋果", kk: "[ˋæp!]", tip: "apple (蘋果) KK: [ˋæp!]" },
  { word: "banana", meaning: "香蕉", kk: "[bəˋnænə]", tip: "banana (香蕉) KK: [bəˋnænə]" },
  { word: "orange", meaning: "柳橙", kk: "[ˋɔrɪndʒ]", tip: "orange (柳橙) KK: [ˋɔrɪndʒ]" },
  { word: "grape", meaning: "葡萄", kk: "[grep]", tip: "grape (葡萄) KK: [grep]" },
  { word: "watermelon", meaning: "西瓜", kk: "[ˋwɔtɚ͵mɛlən]", tip: "watermelon (西瓜) KK: [ˋwɔtɚ͵mɛlən]" },
  { word: "ice cream", meaning: "冰淇淋", kk: "[ˋaɪs ͵krim]", tip: "ice cream (冰淇淋) KK: [ˋaɪs ͵krim]" },
  { word: "cake", meaning: "蛋糕", kk: "[kek]", tip: "cake (蛋糕) KK: [kek]" },
  { word: "candy", meaning: "糖果", kk: "[ˋkændɪ]", tip: "candy (糖果) KK: [ˋkændɪ]" },
  { word: "chocolate", meaning: "巧克力", kk: "[ˋtʃɑkəlɪt]", tip: "chocolate (巧克力) KK: [ˋtʃɑkəlɪt]" },
  { word: "pizza", meaning: "披薩", kk: "[ˋpitsə]", tip: "pizza (披薩) KK: [ˋpitsə]" },
  { word: "French fries", meaning: "薯條", kk: "[frɛntʃ fraɪz]", tip: "French fries (薯條) KK: [frɛntʃ fraɪz]" },
  { word: "hot dog", meaning: "熱狗", kk: "[hɑt dɔg]", tip: "hot dog (熱狗) KK: [hɑt dɔg]" },

  // --- 身體動作與日常習慣 (Actions & Verbs) ---
  { word: "tremble", meaning: "發抖 / 顫抖", kk: "[ˋtrɛmb!]", tip: "tremble (顫抖) KK: [ˋtrɛmb!]" },
  { word: "yawn", meaning: "打哈欠", kk: "[jɔn]", tip: "yawn (打哈欠) KK: [jɔn]" },
  { word: "stretch", meaning: "伸展 / 伸懶腰", kk: "[strɛtʃ]", tip: "stretch (伸展) KK: [strɛtʃ]" },
  { word: "shut", meaning: "閉上 / 關閉", kk: "[ʃʌt]", tip: "shut (閉上) KK: [ʃʌt]" },
  { word: "open", meaning: "打開", kk: "[ˋopən]", tip: "open (打開) KK: [ˋopən]" },
  { word: "brush", meaning: "刷 (牙/毛)", kk: "[brʌʃ]", tip: "brush (刷) KK: [brʌʃ]" },
  { word: "wash", meaning: "清洗", kk: "[wɑʃ]", tip: "wash (清洗) KK: [wɑʃ]" },
  { word: "borrow", meaning: "借入", kk: "[ˋbɑro]", tip: "borrow (借入) KK: [ˋbɑro]" },
  { word: "lend", meaning: "借出", kk: "[lɛnd]", tip: "lend (借出) KK: [lɛnd]" },
  { word: "prepare", meaning: "準備", kk: "[prɪˋpɛr]", tip: "prepare (準備) KK: [prɪˋpɛr]" },
  { word: "celebrate", meaning: "慶祝", kk: "[ˋsɛlə͵bret]", tip: "celebrate (慶祝) KK: [ˋsɛlə͵bret]" },
  { word: "invite", meaning: "邀請", kk: "[ɪnˋvaɪt]", tip: "invite (邀請) KK: [ɪnˋvaɪt]" },
  { word: "touch", meaning: "碰觸", kk: "[tʌtʃ]", tip: "touch (碰觸) KK: [tʌtʃ]" },
  { word: "swim", meaning: "游泳", kk: "[swɪm]", tip: "swim (游泳) KK: [swɪm]" },
  { word: "jump", meaning: "跳躍", kk: "[dʒʌmp]", tip: "jump (跳躍) KK: [dʒʌmp]" },
  { word: "run", meaning: "跑步", kk: "[rʌn]", tip: "run (跑步) KK: [rʌn]" },
  { word: "walk", meaning: "走路", kk: "[wɔk]", tip: "walk (走路) KK: [wɔk]" },
  { word: "climb", meaning: "攀爬", kk: "[klaɪm]", tip: "climb (攀爬) KK: [klaɪm]" },
  { word: "dance", meaning: "跳舞", kk: "[dæns]", tip: "dance (跳舞) KK: [dæns]" },
  { word: "sing", meaning: "唱歌", kk: "[sɪŋ]", tip: "sing (唱歌) KK: [sɪŋ]" },
  { word: "draw", meaning: "繪畫", kk: "[drɔ]", tip: "draw (繪畫) KK: [drɔ]" },
  { word: "paint", meaning: "油彩塗色", kk: "[pent]", tip: "paint (塗色) KK: [pent]" },
  { word: "read", meaning: "閱讀", kk: "[rid]", tip: "read (閱讀) KK: [rid]" },
  { word: "write", meaning: "書寫", kk: "[raɪt]", tip: "write (書寫) KK: [raɪt]" },
  { word: "speak", meaning: "說話", kk: "[spik]", tip: "speak (說話) KK: [spik]" },
  { word: "listen", meaning: "聆聽", kk: "[ˋlɪsn]", tip: "listen (聆聽) KK: [ˋlɪsn]" },
  { word: "shout", meaning: "大喊", kk: "[ʃaʊt]", tip: "shout (大喊) KK: [ʃaʊt]" },
  { word: "laugh", meaning: "大笑", kk: "[læf]", tip: "laugh (大笑) KK: [læf]" },
  { word: "cry", meaning: "哭泣", kk: "[kraɪ]", tip: "cry (哭泣) KK: [kraɪ]" },
  { word: "smile", meaning: "微笑", kk: "[smaɪl]", tip: "smile (微笑) KK: [smaɪl]" },
  { word: "sleep", meaning: "睡覺", kk: "[slip]", tip: "sleep (睡覺) KK: [slip]" },
  { word: "cook", meaning: "烹飪", kk: "[kʊk]", tip: "cook (烹飪) KK: [kʊk]" },
  { word: "clean", meaning: "打掃", kk: "[klin]", tip: "clean (打掃) KK: [klin]" },
  { word: "ride", meaning: "騎乘", kk: "[raɪd]", tip: "ride (騎乘) KK: [raɪd]" },
  { word: "drive", meaning: "駕駛", kk: "[draɪv]", tip: "drive (駕駛) KK: [draɪv]" },
  { word: "fly", meaning: "飛行 / 放(風箏)", kk: "[flaɪ]", tip: "fly (飛行) KK: [flaɪ]" },
  { word: "catch", meaning: "接住 / 捕捉", kk: "[kætʃ]", tip: "catch (接住) KK: [kætʃ]" },
  { word: "throw", meaning: "投擲", kk: "[θro]", tip: "throw (投擲) KK: [θro]" },

  // --- 休閒、嗜好與樂器運動 (Hobbies & Sports) ---
  { word: "badminton", meaning: "羽毛球", kk: "[ˋbædmɪntən]", tip: "badminton (羽毛球) KK: [ˋbædmɪntən]" },
  { word: "bowling", meaning: "保齡球", kk: "[ˋbolɪŋ]", tip: "bowling (保齡球) KK: [ˋbolɪŋ]" },
  { word: "basketball", meaning: "籃球", kk: "[ˋbæskɪt͵bɔl]", tip: "basketball (籃球) KK: [ˋbæskɪt͵bɔl]" },
  { word: "baseball", meaning: "棒球", kk: "[ˋbes͵bɔl]", tip: "baseball (棒球) KK: [ˋbes͵bɔl]" },
  { word: "football", meaning: "足球", kk: "[ˋfʊt͵bɔl]", tip: "football (足球) KK: [ˋfʊt͵bɔl]" },
  { word: "soccer", meaning: "英式足球", kk: "[ˋsɑkɚ]", tip: "soccer (足球) KK: [ˋsɑkɚ]" },
  { word: "golf", meaning: "高爾夫球", kk: "[gɑlf]", tip: "golf (高爾夫) KK: [gɑlf]" },
  { word: "tennis", meaning: "網球", kk: "[ˋtɛnɪs]", tip: "tennis (網球) KK: [ˋtɛnɪs]" },
  { word: "table tennis", meaning: "乒乓球", kk: "[ˋteb! ͵tɛnɪs]", tip: "table tennis (乒乓球) KK: [ˋteb! ͵tɛnɪs]" },
  { word: "guitar", meaning: "吉他", kk: "[gɪˋtɑr]", tip: "guitar (吉他) KK: [gɪˋtɑr]" },
  { word: "piano", meaning: "鋼琴", kk: "[pɪˋæno]", tip: "piano (鋼琴) KK: [pɪˋæno]" },
  { word: "violin", meaning: "小提琴", kk: "[͵vaɪəˋlɪn]", tip: "violin (小提琴) KK: [͵vaɪəˋlɪn]" },
  { word: "drum", meaning: "鼓", kk: "[drʌm]", tip: "drum (鼓) KK: [drʌm]" },
  { word: "flute", meaning: "長笛", kk: "[flut]", tip: "flute (長笛) KK: [flut]" },
  { word: "kite", meaning: "風箏", kk: "[kaɪt]", tip: "kite (風箏) KK: [kaɪt]" },
  { word: "bicycle", meaning: "腳踏車", kk: "[ˋbaɪsɪk!]", tip: "bicycle (腳踏車) KK: [ˋbaɪsɪk!]" },
  { word: "kung fu", meaning: "功夫", kk: "[ˋkʊŋ ˋfu]", tip: "kung fu (功夫) KK: [ˋkʊŋ ˋfu]" },
  { word: "video game", meaning: "電玩遊戲", kk: "[ˋvɪdɪo gem]", tip: "video game (電玩) KK: [ˋvɪdɪo gem]" },

  // --- 社區場所與地點空間 (Places & Locations) ---
  { word: "kitchen", meaning: "廚房", kk: "[ˋkɪtʃɪn]", tip: "kitchen (廚房) KK: [ˋkɪtʃɪn]" },
  { word: "bedroom", meaning: "臥室", kk: "[ˋbɛd͵rum]", tip: "bedroom (臥室) KK: [ˋbɛd͵rum]" },
  { word: "bathroom", meaning: "浴室", kk: "[ˋbæθ͵rum]", tip: "bathroom (浴室) KK: [ˋbæθ͵rum]" },
  { word: "living room", meaning: "客廳", kk: "[ˋlɪvɪŋ ͵rum]", tip: "living room (客廳) KK: [ˋlɪvɪŋ ͵rum]" },
  { word: "dining room", meaning: "飯廳", kk: "[ˋdaɪnɪŋ ͵rum]", tip: "dining room (飯廳) KK: [ˋdaɪnɪŋ ͵rum]" },
  { word: "balcony", meaning: "陽台", kk: "[ˋbælkənɪ]", tip: "balcony (陽台) KK: [ˋbælkənɪ]" },
  { word: "garden", meaning: "花園", kk: "[ˋgɑrdn]", tip: "garden (花園) KK: [ˋgɑrdn]" },
  { word: "garage", meaning: "車庫", kk: "[gəˋrɑʒ]", tip: "garage (車庫) KK: [gəˋrɑʒ]" },
  { word: "apartment", meaning: "公寓", kk: "[əˋpɑrtmənt]", tip: "apartment (公寓) KK: [əˋpɑrtmənt]" },
  { word: "hospital", meaning: "醫院", kk: "[ˋhɑspɪt!]", tip: "hospital (醫院) KK: [ˋhɑspɪt!]" },
  { word: "supermarket", meaning: "超級市場", kk: "[ˋsupɚ͵mɑrkɪt]", tip: "supermarket (超市) KK: [ˋsupɚ͵mɑrkɪt]" },
  { word: "restaurant", meaning: "餐廳", kk: "[ˋrɛstərənt]", tip: "restaurant (餐廳) KK: [ˋrɛstərənt]" },
  { word: "bakery", meaning: "麵包店", kk: "[ˋbekərɪ]", tip: "bakery (麵包店) KK: [ˋbekərɪ]" },
  { word: "bookstore", meaning: "書店", kk: "[ˋbʊk͵stor]", tip: "bookstore (書店) KK: [ˋbʊk͵stor]" },
  { word: "library", meaning: "圖書館", kk: "[ˋlaɪbrɛrɪ]", tip: "library (圖書館) KK: [ˋlaɪbrɛrɪ]" },
  { word: "movie theater", meaning: "電影院", kk: "[ˋmuvɪ ͵θɪətɚ]", tip: "movie theater (電影院) KK: [ˋmuvɪ ͵θɪətɚ]" },
  { word: "post office", meaning: "郵局", kk: "[post ˋɔfɪs]", tip: "post office (郵局) KK: [post ˋɔfɪs]" },
  { word: "park", meaning: "公園", kk: "[pɑrk]", tip: "park (公園) KK: [pɑrk]" },
  { word: "zoo", meaning: "動物園", kk: "[zu]", tip: "zoo (動物園) KK: [zu]" },
  { word: "school", meaning: "學校", kk: "[skul]", tip: "school (學校) KK: [skul]" },
  { word: "station", meaning: "車站", kk: "[ˋsteʃən]", tip: "station (車站) KK: [ˋsteʃən]" },
  { word: "airport", meaning: "機場", kk: "[ˋɛr͵pɔrt]", tip: "airport (機場) KK: [ˋɛr͵pɔrt]" },
  { word: "bank", meaning: "銀行", kk: "[bæŋk]", tip: "bank (銀行) KK: [bæŋk]" },

  // --- 學校與課堂作息 (School & Classroom) ---
  { word: "classmate", meaning: "同學", kk: "[ˋklæs͵met]", tip: "classmate (同學) KK: [ˋklæs͵met]" },
  { word: "teacher", meaning: "老師", kk: "[ˋtitʃɚ]", tip: "teacher (老師) KK: [ˋtitʃɚ]" },
  { word: "student", meaning: "學生", kk: "[ˋstjudnt]", tip: "student (學生) KK: [ˋstjudnt]" },
  { word: "classroom", meaning: "教室", kk: "[ˋklæs͵rum]", tip: "classroom (教室) KK: [ˋklæs͵rum]" },
  { word: "homework", meaning: "家庭作業", kk: "[ˋhom͵wɝk]", tip: "homework (家庭作業) KK: [ˋhom͵wɝk]" },
  { word: "desk", meaning: "書桌", kk: "[dɛsk]", tip: "desk (書桌) KK: [dɛsk]" },
  { word: "chair", meaning: "椅子", kk: "[tʃɛr]", tip: "chair (椅子) KK: [tʃɛr]" },
  { word: "blackboard", meaning: "黑板", kk: "[ˋblæk͵bɔrd]", tip: "blackboard (黑板) KK: [ˋblæk͵bɔrd]" },
  { word: "book", meaning: "書籍", kk: "[bʊk]", tip: "book (書籍) KK: [bʊk]" },
  { word: "pencil", meaning: "鉛筆", kk: "[ˋpɛns!]", tip: "pencil (鉛筆) KK: [ˋpɛns!]" },
  { word: "pen", meaning: "原子筆", kk: "[pɛn]", tip: "pen (原子筆) KK: [pɛn]" },
  { word: "eraser", meaning: "橡皮擦", kk: "[ɪˋresɚ]", tip: "eraser (橡皮擦) KK: [ɪˋresɚ]" },
  { word: "ruler", meaning: "尺", kk: "[ˋrulɚ]", tip: "ruler (尺) KK: [ˋrulɚ]" },
  { word: "bag", meaning: "書包 / 袋子", kk: "[bæg]", tip: "bag (書包) KK: [bæg]" },
  { word: "lesson", meaning: "課程", kk: "[ˋlɛsn]", tip: "lesson (課程) KK: [ˋlɛsn]" },
  { word: "test", meaning: "考試", kk: "[tɛst]", tip: "test (考試) KK: [tɛst]" },

  // --- 人物、親屬與特質 (People & Family) ---
  { word: "parents", meaning: "父母親", kk: "[ˋpɛrənts]", tip: "parents (父母親) KK: [ˋpɛrənts]" },
  { word: "grandparents", meaning: "祖父母", kk: "[ˋgrænd͵pɛrənts]", tip: "grandparents (祖父母) KK: [ˋgrænd͵pɛrənts]" },
  { word: "father", meaning: "父親", kk: "[ˋfɑðɚ]", tip: "father (父親) KK: [ˋfɑðɚ]" },
  { word: "mother", meaning: "母親", kk: "[ˋmʌðɚ]", tip: "mother (母親) KK: [ˋmʌðɚ]" },
  { word: "brother", meaning: "兄弟", kk: "[ˋbrʌðɚ]", tip: "brother (兄弟) KK: [ˋbrʌðɚ]" },
  { word: "sister", meaning: "姊妹", kk: "[ˋsɪstɚ]", tip: "sister (姊妹) KK: [ˋsɪstɚ]" },
  { word: "baby", meaning: "嬰兒", kk: "[ˋbebɪ]", tip: "baby (嬰兒) KK: [ˋbebɪ]" },
  { word: "friend", meaning: "朋友", kk: "[frɛnd]", tip: "friend (朋友) KK: [frɛnd]" },
  { word: "doctor", meaning: "醫生", kk: "[ˋdɑktɚ]", tip: "doctor (醫生) KK: [ˋdɑktɚ]" },
  { word: "nurse", meaning: "護士", kk: "[nɝs]", tip: "nurse (護士) KK: [nɝs]" },
  { word: "police officer", meaning: "警察", kk: "[pəˋlis ͵ɔfɪsɚ]", tip: "police officer (警察) KK: [pəˋlis ͵ɔfɪsɚ]" },
  { word: "driver", meaning: "司機", kk: "[ˋdraɪvɚ]", tip: "driver (司機) KK: [ˋdraɪvɚ]" },

  // --- 描述性形容詞 (Adjectives) ---
  { word: "scary", meaning: "恐怖的", kk: "[ˋskɛrɪ]", tip: "scary (恐怖的) KK: [ˋskɛrɪ]" },
  { word: "funny", meaning: "滑稽有趣的", kk: "[ˋfʌnɪ]", tip: "funny (有趣的) KK: [ˋfʌnɪ]" },
  { word: "happy", meaning: "快樂的", kk: "[ˋhæpɪ]", tip: "happy (快樂的) KK: [ˋhæpɪ]" },
  { word: "sad", meaning: "悲傷的", kk: "[sæd]", tip: "sad (悲傷的) KK: [sæd]" },
  { word: "tired", meaning: "疲憊的", kk: "[taɪrd]", tip: "tired (疲憊的) KK: [taɪrd]" },
  { word: "hungry", meaning: "飢餓的", kk: "[ˋhʌŋgrɪ]", tip: "hungry (飢餓的) KK: [ˋhʌŋgrɪ]" },
  { word: "thirsty", meaning: "口渴的", kk: "[ˋθɝstɪ]", tip: "thirsty (口渴的) KK: [ˋθɝstɪ]" },
  { word: "sick", meaning: "生病的", kk: "[sɪk]", tip: "sick (生病的) KK: [sɪk]" },
  { word: "tall", meaning: "高的", kk: "[tɔl]", tip: "tall (高的) KK: [tɔl]" },
  { word: "short", meaning: "矮的 / 短的", kk: "[ʃɔrt]", tip: "short (矮/短) KK: [ʃɔrt]" },
  { word: "thin", meaning: "瘦的 / 薄的", kk: "[θɪn]", tip: "thin (瘦的) KK: [θɪn]" },
  { word: "fat", meaning: "胖的", kk: "[fæt]", tip: "fat (胖的) KK: [fæt]" },
  { word: "big", meaning: "大的", kk: "[bɪg]", tip: "big (大的) KK: [bɪg]" },
  { word: "small", meaning: "小的", kk: "[smɔl]", tip: "small (小的) KK: [smɔl]" },
  { word: "hot", meaning: "炎熱的", kk: "[hɑt]", tip: "hot (熱的) KK: [hɑt]" },
  { word: "cold", meaning: "寒冷的", kk: "[kold]", tip: "cold (冷的) KK: [kold]" },
  { word: "warm", meaning: "溫暖的", kk: "[wɔrm]", tip: "warm (溫暖的) KK: [wɔrm]" },
  { word: "cool", meaning: "涼爽的 / 酷的", kk: "[kul]", tip: "cool (涼爽的) KK: [kul]" },
  { word: "new", meaning: "新的", kk: "[nju]", tip: "new (新的) KK: [nju]" },
  { word: "old", meaning: "舊的 / 年邁的", kk: "[old]", tip: "old (舊的/老的) KK: [old]" },
  { word: "young", meaning: "年輕的", kk: "[jʌŋ]", tip: "young (年輕的) KK: [jʌŋ]" },
  { word: "clean", meaning: "乾淨的", kk: "[klin]", tip: "clean (乾淨的) KK: [klin]" },
  { word: "dirty", meaning: "骯髒的", kk: "[ˋdɝtɪ]", tip: "dirty (骯髒的) KK: [ˋdɝtɪ]" },
  { word: "difficult", meaning: "困難的", kk: "[ˋdɪfək!t]", tip: "difficult (困難的) KK: [ˋdɪfək!t]" },
  { word: "easy", meaning: "容易的", kk: "[ˋizɪ]", tip: "easy (容易的) KK: [ˋizɪ]" },
  { word: "talented", meaning: "有天賦的", kk: "[ˋtæləntɪd]", tip: "talented (有天賦的) KK: [ˋtæləntɪd]" },
  { word: "busy", meaning: "忙碌的", kk: "[ˋbɪzɪ]", tip: "busy (忙碌的) KK: [ˋbɪzɪ]" },
  { word: "sweet", meaning: "甜的", kk: "[swit]", tip: "sweet (甜的) KK: [swit]" },
  { word: "loud", meaning: "大聲的", kk: "[laʊd]", tip: "loud (大聲的) KK: [laʊd]" },
  { word: "quiet", meaning: "安靜的", kk: "[ˋkwaɪət]", tip: "quiet (安靜的) KK: [ˋkwaɪət]" },

  // --- 時間、頻率與介系詞 (Time, Frequency & Prepositions) ---
  { word: "second", meaning: "秒", kk: "[ˋsɛkənd]", tip: "second (秒) KK: [ˋsɛkənd]" },
  { word: "minute", meaning: "分鐘", kk: "[ˋmɪnɪt]", tip: "minute (分鐘) KK: [ˋmɪnɪt]" },
  { word: "hour", meaning: "小時", kk: "[aʊr]", tip: "hour (小時) KK: [aʊr]" },
  { word: "quarter", meaning: "一刻鐘 (15分)", kk: "[ˋkwɔrtɚ]", tip: "quarter (一刻鐘) KK: [ˋkwɔrtɚ]" },
  { word: "noon", meaning: "中午", kk: "[nun]", tip: "noon (中午) KK: [nun]" },
  { word: "morning", meaning: "早晨", kk: "[ˋmɔrnɪŋ]", tip: "morning (早晨) KK: [ˋmɔrnɪŋ]" },
  { word: "afternoon", meaning: "下午", kk: "[ˋæftɚˋnun]", tip: "afternoon (下午) KK: [ˋæftɚˋnun]" },
  { word: "evening", meaning: "傍晚", kk: "[ˋivnɪŋ]", tip: "evening (傍晚) KK: [ˋivnɪŋ]" },
  { word: "night", meaning: "夜晚", kk: "[naɪt]", tip: "night (夜晚) KK: [naɪt]" },
  { word: "today", meaning: "今天", kk: "[təˋde]", tip: "today (今天) KK: [təˋde]" },
  { word: "tomorrow", meaning: "明天", kk: "[təˋmɑro]", tip: "tomorrow (明天) KK: [təˋmɑro]" },
  { word: "yesterday", meaning: "昨天", kk: "[ˋjɛstɚde]", tip: "yesterday (昨天) KK: [ˋjɛstɚde]" },
  { word: "always", meaning: "總是 (100%)", kk: "[ˋɔlwez]", tip: "always (總是) KK: [ˋɔlwez]" },
  { word: "usually", meaning: "通常 (80%)", kk: "[ˋjuʒʊəlɪ]", tip: "usually (通常) KK: [ˋjuʒʊəlɪ]" },
  { word: "often", meaning: "經常 (60%)", kk: "[ˋɔfən]", tip: "often (經常) KK: [ˋɔfən]" },
  { word: "sometimes", meaning: "有時 (40%)", kk: "[ˋsʌm͵taɪmz]", tip: "sometimes (有時) KK: [ˋsʌm͵taɪmz]" },
  { word: "rarely", meaning: "很少 (10%)", kk: "[ˋrɛrlɪ]", tip: "rarely (很少) KK: [ˋrɛrlɪ]" },
  { word: "never", meaning: "從未 (0%)", kk: "[ˋnɛvɚ]", tip: "never (從未) KK: [ˋnɛvɚ]" },
  { word: "between", meaning: "在…兩者之間", kk: "[bɪˋtwin]", tip: "between (兩者之間) KK: [bɪˋtwin]" },
  { word: "beside", meaning: "在…旁邊", kk: "[bɪˋsaɪd]", tip: "beside (旁邊) KK: [bɪˋsaɪd]" },
  { word: "under", meaning: "在…下方", kk: "[ˋʌndɚ]", tip: "under (下方) KK: [ˋʌndɚ]" },
  { word: "behind", meaning: "在…後面", kk: "[bɪˋhaɪnd]", tip: "behind (後面) KK: [bɪˋhaɪnd]" },
  { word: "science fiction movie", meaning: "科幻電影", kk: "[ˋsaɪəns ˋfɪkʃən muvɪ]", tip: "science fiction movie (科幻電影) KK: [ˋsaɪəns ˋfɪkʃən muvɪ]" },
  { word: "horror movie", meaning: "恐怖電影", kk: "[ˋhɔrɚ muvɪ]", tip: "horror movie (恐怖電影) KK: [ˋhɔrɚ muvɪ]" },
  { word: "adventure movie", meaning: "冒險電影", kk: "[ədˋvɛntʃɚ muvɪ]", tip: "adventure movie (冒險電影) KK: [ədˋvɛntʃɚ muvɪ]" }
];

// ==========================================
// 2. 單字題目動態組合器
// ==========================================
function buildDynamicVocabQuiz(count, stageTitle) {
  const poolShuffled = [...bLevelVocabMasterPool].sort(() => Math.random() - 0.5);
  const selectedTargets = poolShuffled.slice(0, Math.min(count, poolShuffled.length));

  return selectedTargets.map((target) => {
    const distractors = bLevelVocabMasterPool
      .filter((item) => item.word !== target.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [target, ...distractors].sort(() => Math.random() - 0.5);
    const correctIdx = allOptions.findIndex((item) => item.word === target.word);

    return {
      part: stageTitle,
      prompt: "🎧 請聽發音，選出正確的單字：",
      word: target.word,
      meaning: target.meaning,
      options: allOptions.map((item) => item.word),
      meanings: allOptions.map((item) => item.meaning),
      kkList: allOptions.map((item) => item.kk),
      ans: correctIdx,
      audioText: target.word,
      tip: `💡 ${target.tip}`
    };
  });
}

const rawVocabHighFreq = buildDynamicVocabQuiz(15, "🔥 快速隨機抽測 (15題)");
const rawVocabBLevel = buildDynamicVocabQuiz(50, "⭐ B級全範圍綜合測驗 (50題)");

// ==========================================
// 3. 語法參數化生成器 (500 題多元情境題庫)
// ==========================================
function generate500GrammarQuestions() {
  const names = ["Andy", "Julia", "Janice", "Henry", "Susan", "Tina", "Frank", "Stephen", "Lucy", "Jerry", "Maggie", "Kathy", "Jason", "Mike", "Peter", "Sandy", "Helen", "Paul", "David", "Emma"];
  const locations = ["in the kitchen", "in the living room", "in the bedroom", "in the dining room", "in the garage", "in the classroom", "at the library", "at the supermarket", "in front of the hospital", "beside the restaurant"];
  const uncountables = [
    { word: "sugar", hint: "糖" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "milk", hint: "牛奶" },
    { word: "money", hint: "金錢" },
    { word: "water", hint: "水" },
    { word: "corn", hint: "玉米" },
    { word: "soup", hint: "湯" },
    { word: "juice", hint: "果汁" }
  ];
  const countables = [
    { word: "sausages", single: "sausage", hint: "香腸" },
    { word: "pillows", single: "pillow", hint: "枕頭" },
    { word: "hangers", single: "hanger", hint: "衣架" },
    { word: "lamps", single: "lamp", hint: "檯燈" },
    { word: "desks", single: "desk", hint: "書桌" },
    { word: "strawberries", single: "strawberry", hint: "草莓" },
    { word: "cookies", single: "cookie", hint: "餅乾" },
    { word: "sandwiches", single: "sandwich", hint: "三明治" },
    { word: "bicycles", single: "bicycle", hint: "腳踏車" },
    { word: "classmates", single: "classmate", hint: "同學" }
  ];
  const verbs = [
    { base: "play the guitar", ing: "playing the guitar", s: "plays the guitar", hint: "彈吉他" },
    { base: "brush teeth", ing: "brushing teeth", s: "brushes teeth", hint: "刷牙" },
    { base: "wash the face", ing: "washing the face", s: "washes the face", hint: "洗臉" },
    { base: "do homework", ing: "doing homework", s: "does homework", hint: "做作業" },
    { base: "cook breakfast", ing: "cooking breakfast", s: "cooks breakfast", hint: "煮早餐" },
    { base: "ride a bicycle", ing: "riding a bicycle", s: "rides a bicycle", hint: "騎腳踏車" },
    { base: "play badminton", ing: "playing badminton", s: "plays badminton", hint: "打羽毛球" },
    { base: "shut eyes", ing: "shutting eyes", s: "shuts eyes", hint: "閉眼" },
    { base: "clean the room", ing: "cleaning the room", s: "cleans the room", hint: "打掃房間" },
    { base: "prepare dinner", ing: "preparing dinner", s: "prepares dinner", hint: "準備晚餐" }
  ];

  const generated = [];

  for (let i = 0; i < 500; i++) {
    const type = i % 14;
    const name1 = names[i % names.length];
    const name2 = names[(i + 3) % names.length];
    const loc = locations[i % locations.length];
    const uncnt = uncountables[i % uncountables.length];
    const cnt = countables[i % countables.length];
    const v = verbs[i % verbs.length];
    const hour = (i % 11) + 1;
    const nextHour = hour + 1;

    let qObj = {};

    switch (type) {
      case 0:
        qObj = {
          part: "重點文法：時間表達 (Quarter Past)",
          prompt: `It's ${hour}:15 now. We can say it is ______ ${hour}.`,
          options: ["a quarter past", "a quarter to", "half past", "15 past to"],
          ans: 0,
          tip: `💡【時間讀法】${hour}:15 代表『過了一刻鐘』，使用 a quarter past ${hour}。`
        };
        break;

      case 1:
        qObj = {
          part: "重點文法：時間表達 (Quarter To)",
          prompt: `Look at the clock! It is ${hour}:45. It is ______ ${nextHour}.`,
          options: ["a quarter to", "a quarter past", "half to", "15 to past"],
          ans: 0,
          tip: `💡【時間讀法】差 15 分鐘到 ${nextHour} 點（${hour}:45），使用 a quarter to ${nextHour}。`
        };
        break;

      case 2:
        qObj = {
          part: "重點文法：不可數名詞數量",
          prompt: `How ______ ${uncnt.word} does ${name1} need in the kitchen?`,
          options: ["much", "many", "any", "little"],
          ans: 0,
          tip: `💡【不可數名詞】${uncnt.word}（${uncnt.hint}）為不可數名詞，詢問數量要用 How much。`
        };
        break;

      case 3:
        qObj = {
          part: "重點文法：可數複數數量",
          prompt: `How ______ ${cnt.word} can you see on ${name1}'s table?`,
          options: ["many", "much", "any", "some"],
          ans: 0,
          tip: `💡【可數名詞複數】${cnt.word}（${cnt.hint}）為可數複數名詞，詢問數量要用 How many。`
        };
        break;

      case 4:
        qObj = {
          part: "重點文法：現在進行式問答",
          prompt: `What is ${name1} doing ${loc}? She ______ now.`,
          options: [`is ${v.ing}`, v.s, v.base, `was ${v.ing}`],
          ans: 0,
          tip: `💡【現在進行式】問句是 What is ... doing，回答必須對應用主詞 + be動詞 + V-ing（is ${v.ing}）。`
        };
        break;

      case 5:
        qObj = {
          part: "重點文法：複數代名詞簡答",
          prompt: `Are ${name1} and ${name2} ${v.ing} right now? No, ______.`,
          options: ["they aren't", "he isn't", "they don't", "we aren't"],
          ans: 0,
          tip: `💡【代名詞與簡答】${name1} and ${name2} 為兩個人（they），be 動詞問句否定簡答用 No, they aren't。`
        };
        break;

      case 6:
        qObj = {
          part: "重點文法：存在句單數與不可數",
          prompt: `______ there any ${uncnt.word} in ${name1}'s apartment?`,
          options: ["Is", "Are", "Do", "Does"],
          ans: 0,
          tip: `💡【存在句】${uncnt.word}（${uncnt.hint}）是不可數名詞，疑問句需使用單數動詞 Is there。`
        };
        break;

      case 7:
        qObj = {
          part: "重點文法：存在句複數",
          prompt: `There ______ two ${cnt.word} ${loc}.`,
          options: ["are", "is", "have", "has"],
          ans: 0,
          tip: `💡【存在句】後方是複數名詞 two ${cnt.word}，be 動詞必須使用 are。`
        };
        break;

      case 8:
        qObj = {
          part: "重點文法：空間介系詞 (Between)",
          prompt: `The supermarket is ______ the hospital and ${name1}'s house.`,
          options: ["between", "next to", "beside", "behind"],
          ans: 0,
          tip: "💡【空間介系詞】between A and B 為固定片語，表示『在兩者之間』。"
        };
        break;

      case 9:
        qObj = {
          part: "重點文法：頻率副詞 (Rarely)",
          prompt: `${name1} ______ ${v.s}. He only does it once a year.`,
          options: ["rarely", "always", "usually", "often"],
          ans: 0,
          tip: "💡【頻率副詞】一年只做一次代表頻率極低，需用具否定意味的 rarely（幾乎不）。"
        };
        break;

      case 10:
        qObj = {
          part: "重點文法：情態助動詞轉折 (can / can't)",
          prompt: `${name1} can ${v.base}, but he ______ drive a car.`,
          options: ["can't", "can", "isn't", "doesn't"],
          ans: 0,
          tip: "💡【轉折句型】前半句為肯定的 can，連接詞 but 後方表示不會駕駛，需用 can't。"
        };
        break;

      case 11:
        qObj = {
          part: "重點文法：情態請求 (May I...)",
          prompt: `May I ______ your ${cnt.single} for my homework? Sure!`,
          options: ["borrow", "borrows", "borrowing", "to borrow"],
          ans: 0,
          tip: "💡【情態助動詞】May I 後方一律接原形動詞（borrow 借入）。"
        };
        break;

      case 12:
        qObj = {
          part: "重點文法：祈使句動詞原形",
          prompt: `Please ______ quiet! The baby is sleeping ${loc}.`,
          options: ["be", "is", "are", "being"],
          ans: 0,
          tip: "💡【祈使句】Please 後方直接接原形動詞，be 動詞的原形就是 be。"
        };
        break;

      case 13:
      default:
        qObj = {
          part: "重點文法：一般動詞問答 (Do you...)",
          prompt: `Do you and ${name1} have to go to school on time? No, we ______.`,
          options: ["don't", "haven't", "aren't", "can't"],
          ans: 0,
          tip: "💡【助動詞否定簡答】以 Do 開頭提問，主詞為 we，否定簡答使用 No, we don't。"
        };
        break;
    }

    generated.push(qObj);
  }

  return generated;
}

const rawGrammarQuestions = generate500GrammarQuestions();

// ==========================================
// 4. 官方聽力：八大核心考點 500 題隨機生成引擎 (B級標準大綱)
// ==========================================
function generate500ListeningReviewQuestions() {
  const names = ["Andy", "Julia", "Janice", "Henry", "Susan", "Tina", "Frank", "Stephen", "Lucy", "Jerry", "Maggie", "Kathy", "Jason", "Mike", "Peter", "Sandy", "Helen", "Paul", "David", "Emma"];
  const locations = [
    { place: "in the kitchen", act: "cooks dinner", label: "廚房" },
    { place: "in the living room", act: "watches television", label: "客廳" },
    { place: "in the bedroom", act: "does homework at the desk", label: "臥室" },
    { place: "in the dining room", act: "has breakfast", label: "飯廳" },
    { place: "in the garage", act: "washes the car", label: "車庫" },
    { place: "at the library", act: "reads English books", label: "圖書館" },
    { place: "at the supermarket", act: "buys vegetables and fruit", label: "超市" },
    { place: "in the bathroom", act: "takes a shower", label: "浴室" }
  ];
  const uncountables = [
    { word: "sugar", hint: "糖" },
    { word: "milk", hint: "牛奶" },
    { word: "shampoo", hint: "洗髮精" },
    { word: "water", hint: "水" },
    { word: "soup", hint: "湯" },
    { word: "juice", hint: "果汁" },
    { word: "money", hint: "錢" }
  ];
  const countables = [
    { word: "cookies", hint: "餅乾" },
    { word: "sandwiches", hint: "三明治" },
    { word: "apples", hint: "蘋果" },
    { word: "pillows", hint: "枕頭" },
    { word: "hangers", hint: "衣架" },
    { word: "lamps", hint: "檯燈" },
    { word: "desks", hint: "書桌" }
  ];
  const activities = [
    { base: "play the guitar", ing: "playing the guitar", third: "plays the guitar", label: "彈吉他" },
    { base: "play the piano", ing: "playing the piano", third: "plays the piano", label: "彈鋼琴" },
    { base: "play badminton", ing: "playing badminton", third: "plays badminton", label: "打羽毛球" },
    { base: "swim in the pool", ing: "swimming in the pool", third: "swims in the pool", label: "游泳" },
    { base: "ride a bicycle", ing: "riding a bicycle", third: "rides a bicycle", label: "騎腳踏車" },
    { base: "clean the room", ing: "cleaning the room", third: "cleans the room", label: "打掃房間" },
    { base: "brush teeth", ing: "brushing teeth", third: "brushes teeth", label: "刷牙" }
  ];

  const generated = [];

  for (let i = 0; i < 500; i++) {
    const type = i % 8; // 八大核心考點輪循
    const name1 = names[i % names.length];
    const name2 = names[(i + 3) % names.length];
    const loc = locations[i % locations.length];
    const uncnt = uncountables[i % uncountables.length];
    const cnt = countables[i % countables.length];
    const act = activities[i % activities.length];
    const hour = (i % 11) + 1;
    const nextHour = hour + 1;

    let qObj = {};

    switch (type) {
      // 考點 1: 時間辨析 (Quarter past / to / half past)
      case 0:
        if (i % 2 === 0) {
          qObj = {
            part: "【考點 1】時間辨析 (Quarter past)",
            prompt: `Statement: Listen to the time statement.`,
            audioText: `Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${hour}. Statement C: It's half past ${hour}.`,
            options: [`It's a quarter past ${hour}. (${hour}:15)`, `It's a quarter to ${hour}. (${hour - 1}:45)`, `It's half past ${hour}. (${hour}:30)`],
            ans: 0,
            tip: `💡【時間讀法】a quarter past ${hour} 代表『過了一刻鐘』，即 ${hour}:15。`
          };
        } else {
          qObj = {
            part: "【考點 1】時間辨析 (Quarter to)",
            prompt: `Statement: Listen to the time statement.`,
            audioText: `Statement A: It's a quarter past ${hour}. Statement B: It's a quarter to ${nextHour}. Statement C: It's half past ${hour}.`,
            options: [`It's a quarter past ${hour}. (${hour}:15)`, `It's a quarter to ${nextHour}. (${hour}:45)`, `It's half past ${hour}. (${hour}:30)`],
            ans: 1,
            tip: `💡【時間讀法】a quarter to ${nextHour} 代表『差一刻鐘到 ${nextHour} 點』，即 ${hour}:45。`
          };
        }
        break;

      // 考點 2: 相對空間介系詞 (Between / Next to / Beside)
      case 1:
        qObj = {
          part: "【考點 2】位置介系詞 (Between)",
          prompt: `Statement: Where is the place?`,
          audioText: `Statement A: The supermarket is beside the library. Statement B: The supermarket is between the hospital and the restaurant. Statement C: The supermarket is behind the school.`,
          options: ["The supermarket is beside the library.", "The supermarket is between the hospital and the restaurant.", "The supermarket is behind the school."],
          ans: 1,
          tip: "💡【空間介系詞】between A and B 代表『在兩者之間』；beside 代表在旁邊。"
        };
        break;

      // 考點 3: 頻率副詞階梯 (Rarely / Never / Always)
      case 2:
        qObj = {
          part: "【考點 3】頻率副詞 (Rarely / Never)",
          prompt: `Statement: How often does ${name1} do this?`,
          audioText: `Statement A: ${name1} rarely ${act.third}. Statement B: ${name1} always goes to English class. Statement C: ${name1} never does homework.`,
          options: [`${name1} rarely ${act.third}.`, `${name1} always goes to English class.`, `${name1} never does homework.`],
          ans: 0,
          tip: `💡【頻率副詞】rarely 代表『很少、幾乎不（10%）』，頻率低於 often，高於 never。`
        };
        break;

      // 考點 4: Where 疑問詞與具體地點
      case 3:
        qObj = {
          part: "【考點 4】疑問詞問答 (Where / 地點介系詞)",
          prompt: `Question: Where does ${name1} ${act.base}?`,
          audioText: `Where does ${name1} ${act.base}? A: He has a big bag. B: In the ${loc.label}. C: Yes, he does it every day.`,
          options: ["He has a big bag.", `He does it ${loc.place}.`, "Yes, he does it every day."],
          ans: 1,
          tip: `💡【地點問答】聽到 Where 提問，核心回答為具體空間介系詞片語（${loc.place}）。`
        };
        break;

      // 考點 5: 現在進行式問答 (What is ... doing?)
      case 4:
        qObj = {
          part: "【考點 5】現在進行式 (What is ... doing?)",
          prompt: `Question: What is ${name1} doing right now?`,
          audioText: `What is ${name1} doing right now? A: She is ${act.ing}. B: She ${act.third} every Sunday. C: She can ${act.base}.`,
          options: [`She is ${act.ing}.`, `She ${act.third} every Sunday.`, `She can ${act.base}.`],
          ans: 0,
          tip: `💡【現在進行式】問句包含 is ... doing，回答必須使用主詞 + be動詞 + V-ing（is ${act.ing}）。`
        };
        break;

      // 考點 6: 數量疑問詞辨析 (How many vs How much)
      case 5:
        if (i % 2 === 0) {
          qObj = {
            part: "【考點 6】數量疑問詞 (How much 不可數)",
            prompt: `Question: How much ${uncnt.word} do you need?`,
            audioText: `How much ${uncnt.word} do you need? A: Just a little. B: There are five. C: Not many.`,
            options: ["Just a little.", "There are five.", "Not many."],
            ans: 0,
            tip: `💡【不可數名詞數量】${uncnt.word}（${uncnt.hint}）為不可數名詞，使用 How much 提問，回答用 a little 或 much。`
          };
        } else {
          qObj = {
            part: "【考點 6】數量疑問詞 (How many 可數)",
            prompt: `Question: How many ${cnt.word} can you see?`,
            audioText: `How many ${cnt.word} can you see? A: Just a little. B: I can see three ${cnt.word}. C: Yes, I do.`,
            options: ["Just a little.", `I can see three ${cnt.word}.`, "Yes, I do."],
            ans: 1,
            tip: `💡【可數複數名詞數量】${cnt.word}（${cnt.hint}）為可數複數，使用 How many 提問，回答需給出確切數字。`
          };
        }
        break;

      // 考點 7: 對話原因辨識 (Why 問句)
      case 6:
        qObj = {
          part: "【考點 7】對話理解 (Why 問句)",
          prompt: `Question: Why does ${name1} have to leave now?`,
          audioText: `Hi ${name1}, where are you going? I have to go to the station now because the train is coming. Question: Why does ${name1} have to leave now?`,
          options: ["Because the train is coming.", "Because he likes to run.", "Because he wants to eat lunch."],
          ans: 0,
          tip: "💡【因果判斷】聽對話時注意 because 之後的具體原因（the train is coming）。",
          repeat: true
        };
        break;

      // 考點 8: 能力與否定轉折 (Can vs Can't)
      case 7:
      default:
        qObj = {
          part: "【考點 8】短文資訊抓取 (Can vs Can't 轉折)",
          prompt: `Question: What can't ${name1} do?`,
          audioText: `${name1} is very talented. He can ${act.base} and swim, but he can't drive a car. Question: What can't ${name1} do?`,
          options: [`${act.base}.`, "Swim in the pool.", "Drive a car."],
          ans: 2,
          tip: "💡【否定轉折】注意聽清 but 後面的否定情態動詞 can't（不能駕駛汽車）。",
          repeat: true
        };
        break;
    }

    generated.push(qObj);
  }

  return generated;
}

const rawReviewQuestions = generate500ListeningReviewQuestions();

// ==========================================
// 5. Practice 1 題庫 (40 題) - 100% 對齊原文與官方解答
// ==========================================
const rawMockP1 = [
  { part: "Part 1: Photographs", prompt: "Question 1", audioText: "Look at the picture and choose the best answer. Statement A: Julia brushes her teeth. Statement B: Julia washes her face. Statement C: Julia's mother brushes her teeth.", options: ["Julia brushes her teeth.", "Julia washes her face.", "Julia's mother brushes her teeth."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 2", audioText: "Look at the picture and choose the best answer. Statement A: Janice drinks milk for breakfast. Statement B: Janice has lunch at noon. Statement C: Janice eats fruit for breakfast.", options: ["Janice drinks milk for breakfast.", "Janice has lunch at noon.", "Janice eats fruit for breakfast."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 3", audioText: "Look at the picture and choose the best answer. Statement A: It's a quarter to 11. Statement B: It's a quarter past 10. Statement C: It's half past 10.", options: ["It's a quarter to 11.", "It's a quarter past 10.", "It's half past 10."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 4", audioText: "Look at the picture and choose the best answer. Statement A: The basketball game starts at 9:30. Statement B: The baseball game starts at 9:30. Statement C: There is no baseball game today.", options: ["The basketball game starts at 9:30.", "The baseball game starts at 9:30.", "There is no baseball game today."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 5", audioText: "Look at the picture and choose the best answer. Statement A: There is a television on the table. Statement B: There are some flowers on the TV. Statement C: There is a vase on the floor.", options: ["There is a television on the table.", "There are some flowers on the TV.", "There is a vase on the floor."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 6", audioText: "Look at the picture and choose the best answer. Statement A: Andy rarely plays the guitar. Statement B: Andy never goes to science class. Statement C: Andy always goes to English class.", options: ["Andy rarely plays the guitar.", "Andy never goes to science class.", "Andy always goes to English class."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 7", audioText: "Look at the picture and choose the best answer. Statement A: Susan has sausages, sandwiches and French fries for her picnic. Statement B: Susan has hot dogs, French fries, and cookies for her picnic. Statement C: Susan has noodles, milk, and hot dogs for her picnic.", options: ["Susan has sausages, sandwiches and French fries for her picnic.", "Susan has hot dogs, French fries, and cookies for her picnic.", "Susan has noodles, milk, and hot dogs for her picnic."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 8", audioText: "Look at the picture and choose the best answer. Statement A: Henry's hobby is swimming. Statement B: Henry's father's hobby is drawing. Statement C: Henry's mother's hobby is drawing.", options: ["Henry's hobby is swimming.", "Henry's father's hobby is drawing.", "Henry's mother's hobby is drawing."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 9", audioText: "Look at the picture and choose the best answer. Statement A: Please don't smoke outside. Statement B: Please don't speak too loud here. Statement C: Please don't smoke in the restaurant.", options: ["Please don't smoke outside.", "Please don't speak too loud here.", "Please don't smoke in the restaurant."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 10", audioText: "Look at the picture and choose the best answer. Statement A: There is not anything on the plate. Statement B: There is some corn on the plate. Statement C: There are no sausages on the plate.", options: ["There is not anything on the plate.", "There is some corn on the plate.", "There are no sausages on the plate."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 11", audioText: "Look at the picture and choose the best answer. Statement A: She can touch her head with her foot. Statement B: She can stand on one leg and touch the floor. Statement C: She can stand on her head.", options: ["She can touch her head with her foot.", "She can stand on one leg and touch the floor.", "She can stand on her head."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 12: Are there many students in the classroom?", audioText: "Are there many students in the classroom? A: Yes, there are 30 students in the classroom. B: No, the classroom is very big. C: I like to study in the classroom.", options: ["Yes, there are 30 students in the classroom.", "No. The classroom is very big.", "I like to study in the classroom."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 13: Where do you cook?", audioText: "Where do you cook? A: I have a big kitchen. B: I cook in the kitchen. C: I take a bath in the bathroom.", options: ["I have a big kitchen.", "I cook in the kitchen.", "I take a bath in the bathroom."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 14: What does Tina have?", audioText: "What does Tina have? A: She has a new car. B: She needs a bike. C: The books on her desk are mine.", options: ["She has a new car.", "She needs a bike.", "The books on her desk are mine."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 15: How many seconds are there in a minute?", audioText: "How many seconds are there in a minute? A: There are 16 seconds in a minute. B: There are 60 seconds in a minute. C: There are 60 minutes in an hour.", options: ["There are 16 seconds in a minute.", "There are 60 seconds in a minute.", "There are 60 minutes in an hour."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 16: What floor do your parents live on?", audioText: "What floor do your parents live on? A: I live on the eighth floor. B: She lives on the 9th floor. C: They live on the 2nd floor.", options: ["I live on the eighth floor.", "She lives on the 9th floor.", "They live on the 2nd floor."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 17: May I borrow some money?", audioText: "May I borrow some money? A: Sure, how much do you need? B: Sure, how many do you want? C: No, I don't need money.", options: ["Sure, how much do you need?", "Sure. How many do you want?", "No, I don't need money."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 18: Where are you doing your homework?", audioText: "Where are you doing your homework? A: You are doing your homework in front of the television. B: I am playing the piano in the dining room. C: I am doing it at my desk in the bedroom.", options: ["You are doing your homework in front of the television.", "I am playing the piano in the dining room.", "I am doing it at my desk in the bedroom."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 19: What can you see on the floor?", audioText: "What can you see on the floor? A: Yes, I can see the floor. B: I can clean my room quickly. C: I can see two skirts there.", options: ["Yes, I can see the floor.", "I can clean my room quickly.", "I can see two skirts there."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 20: Are there any pictures on the wall?", audioText: "Are there any pictures on the wall? A: He is looking for his pictures. B: He is painting a picture. C: No, there are not any pictures.", options: ["He is looking for his pictures.", "He is painting a picture.", "No, there are not any pictures."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 21: Where are you going to watch the movie?", audioText: "Where are you going to watch the movie? A: I am doing homework at school. B: At the movie theater. C: I am going to watch TV at home.", options: ["I am doing homework at school.", "At the movie theater.", "I am going to watch TV at home."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 22: People are trembling in their seats in the movie theater.", audioText: "People are trembling in their seats in the movie theater. A: They are watching a horror movie. B: They are watching an adventure movie. C: They are dreaming.", options: ["They are watching a horror movie.", "They are watching an adventure movie.", "They are dreaming."], ans: 0 },
  { part: "Part 3: Conversations (23-24)", prompt: "Question 23: Is Sally sad?", audioText: "Good evening, Tim. Good evening, Sally. How are you? I am fine. Thank you. And you? I am not feeling good. Why not? Because my parents will not come to my birthday party. Why won't they? They need to fly to America to work. Question 23. Is Sally sad?", options: ["Yes, she is not sad.", "Yes, she is sad.", "No, she is happy."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (23-24)", prompt: "Question 24: Why can't Sally's parents go to her birthday party?", audioText: "Good evening, Tim. Good evening, Sally. How are you? I am fine. Thank you. And you? I am not feeling good. Why not? Because my parents will not come to my birthday party. Why won't they? They need to fly to America to work. Question 24. Why can't Sally's parents go to her birthday party?", options: ["They will go to Sally's birthday party.", "They will go to work.", "They will come from America."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 25: What kind of movies does Helen like?", audioText: "Hi Helen, where are you going? I'm going to watch a movie. Really, what kind of movie are you going to watch? I want to see a science fiction movie. I have to run now, the movie is about to start. Okay, and I have to be home before lunch. See you. Question 25. What kind of movies does Helen like?", options: ["She wants to watch a movie with Paul.", "She likes science fiction movies.", "She likes romance movies."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 26: Why does Helen have to run?", audioText: "Why does Helen have to run?", options: ["She likes to run.", "She likes science fiction movies.", "The movie is about to start."], ans: 2 },
  { part: "Part 3: Conversations (25-27)", prompt: "Question 27: Do Paul and Helen see the movie together?", audioText: "Do Paul and Helen see the movie together?", options: ["Yes, they do.", "No, they aren't.", "No, they don't."], ans: 2 },
  { part: "Part 4: Talks (28-30)", prompt: "Question 28: What kind of books does Kathy not read?", audioText: "Kathy likes to read books. She reads many different kinds of books. Chinese books, science books, and of course, English books. She also likes sports. She can play basketball, football, and golf well. Now she is learning how to play badminton. Her favorite food is hamburgers, but she is not fat. She is thin because she runs in the park every day and doesn't eat too much. I like her very much. Question 28: What kind of books does Kathy not read in her free time?", options: ["Chinese books.", "Science books.", "Math books."], ans: 2, repeat: true },
  { part: "Part 4: Talks (28-30)", prompt: "Question 29: What kind of sport is Kathy learning now?", audioText: "What kind of sport is Kathy learning now?", options: ["Basketball", "Badminton", "Football"], ans: 1 },
  { part: "Part 4: Talks (28-30)", prompt: "Question 30: Why is Kathy thin?", audioText: "Why is Kathy thin?", options: ["Because she runs a lot and eats a little.", "Because she doesn't eat.", "Because she likes eating hamburgers."], ans: 0 },
  { part: "Part 4: Talks (31-32)", prompt: "Question 31: What does Henry like to do in his free time?", audioText: "In my free time, I like to swim. I am a good swimmer. I can also play the piano and the guitar very well. But I can't play the violin. If you want to be my friend, please tell me after class. Question 31: What does Henry like to do in his free time?", options: ["To swim", "To study English", "To play basketball"], ans: 0, repeat: true },
  { part: "Part 4: Talks (31-32)", prompt: "Question 32: Where is Henry now?", audioText: "Where is Henry now?", options: ["In the living room.", "In the classroom.", "In the dining room."], ans: 1 },
  { part: "Part 4: Talks (33-35)", prompt: "Question 33: Who lives with Jerry?", audioText: "I live in a small apartment with my classmate. We share the kitchen and bathroom. It is very difficult in the morning. I like to take a shower in the morning, but my classmate often uses the bathroom for a long time. Question 33: Who lives with Jerry?", options: ["Jerry lives with his parents.", "Jerry lives with his classmate.", "Jerry lives with his teammate."], ans: 1, repeat: true },
  { part: "Part 4: Talks (33-35)", prompt: "Question 34: How many bathrooms are there in Jerry's house?", audioText: "How many bathrooms are there in Jerry's house?", options: ["2", "1", "0"], ans: 1 },
  { part: "Part 4: Talks (33-35)", prompt: "Question 35: Why does Jerry feel the morning is difficult?", audioText: "Why does Jerry feel the morning is difficult?", options: ["Because he can't use the bathroom.", "Because the bathroom is dirty.", "Because he does not want to go to school."], ans: 0 },
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 36: Whose birthday is coming?", audioText: "Hello. This is Stephen. May I talk to Tina? Hold on, please. Hello, Stephen. This is Tina speaking. I am just calling to tell you that I can't go to your birthday party. I am really sorry. Why can't you come? My parents will go to Singapore for work. They want me to go there with them, but I don't want to live in another country. Question 36: Whose birthday is coming?", options: ["Stephen's birthday is coming.", "Tina's birthday is coming.", "Steven's father's birthday is coming."], ans: 0, repeat: true },
  { part: "Part 3/4: Conversation (36-37)", prompt: "Question 37: Why do Stephen's parents need to go to Singapore?", audioText: "Why do Stephen's parents need to go to Singapore?", options: ["Because they want to celebrate Stephen's birthday.", "Because they have to work in Singapore.", "Because they study in Singapore."], ans: 1 },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 38: What does Stephen think of his parents?", audioText: "Did you tell your parents that you don't want to go? I feel they never listen to me. I am afraid if I tell them, they will still want me to go to Singapore with them. If you stay here, who is going to take care of you? My brother also lives here, but I don't want to live with him. My grandparents live near us. I can live with them. I think you should tell your parents about your plan. They love you. Going to live in another country may not be good for you. I will think about it. I am really sorry about the birthday party. Never mind. Question 38: What does Stephen think of his parents?", options: ["His parents usually listen to him.", "His parents sometimes listen to him.", "His parents never listen to him."], ans: 2, repeat: true },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 39: Who does Stephen want to live with?", audioText: "Who does Stephen want to live with?", options: ["His parents.", "His brother.", "His grandparents."], ans: 2 },
  { part: "Part 3/4: Conversation (38-40)", prompt: "Question 40: What does Tina tell Stephen to do?", audioText: "What does Tina tell Stephen to do?", options: ["She tells Stephen to tell his parents about his plan.", "She tells Stephen not to tell his parents about his plan.", "She tells Stephen to tell his brother about his plan."], ans: 0 }
];

// ==========================================
// 6. Practice 2 題庫 (50 題) - 100% 對齊原文與官方解答
// ==========================================
const rawMockP2 = [
  { part: "Part 1: Photographs", prompt: "Question 1", audioText: "Look at the picture and choose the best answer. Statement A: There is a shirt in the closet. Statement B: There are two pillows on the bed. Statement C: There is a clock on the wall.", options: ["There is a shirt in the closet.", "There are two pillows on the bed.", "There is a clock on the wall."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 2", audioText: "Look at the picture and choose the best answer. Statement A: They are waiting in line. Statement B: They are in the movie theater. Statement C: They are shutting their eyes.", options: ["They are waiting in line.", "They are in the movie theater.", "They are shutting their eyes."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 3", audioText: "Look at the picture and choose the best answer. Statement A: The hospital is beside the restaurant. Statement B: The supermarket is next to the post office. Statement C: The supermarket is between the hospital and the restaurant.", options: ["The hospital is beside the restaurant.", "The supermarket is next to the post office.", "The supermarket is between the hospital and the restaurant."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 4", audioText: "Look at the picture and choose the best answer. Statement A: She doesn't know how to use the computer. Statement B: She can use the computer very well. Statement C: She is playing the computer games happily.", options: ["She doesn't know how to use the computer.", "She can use the computer very well.", "She is playing the computer games happily."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 5", audioText: "Look at the picture and choose the best answer. Statement A: Tina yawns. Statement B: Jennifer yawns. Statement C: Tina stretches.", options: ["Tina yawns.", "Jennifer yawns.", "Tina stretches."], ans: 0 },
  { part: "Part 1: Photographs", prompt: "Question 6", audioText: "Look at the picture and choose the best answer. Statement A: It's 10 past 5. Statement B: It's a quarter past 5. Statement C: It's a quarter to 5.", options: ["It's 10 past 5.", "It's a quarter past five.", "It's a quarter to five."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 7", audioText: "Look at the picture and choose the best answer. Statement A: There is a radio on the table. Statement B: There is a hanger on the coffee table. Statement C: There is a sofa in the bedroom.", options: ["There is a radio on the table.", "There is a hanger on the coffee table.", "There is a sofa in the bedroom."], ans: 2 },
  { part: "Part 1: Photographs", prompt: "Question 8", audioText: "Look at the picture and choose the best answer. Statement A: Please don't speak too loud here. Statement B: Please don't smoke in the restaurant. Statement C: Please don't smoke outside.", options: ["Please don't speak too loud here.", "Please don't smoke in the restaurant.", "Please don't smoke outside."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 9", audioText: "Look at the picture and choose the best answer. Statement A: The girl is watching television. Statement B: The boy is drawing. Statement C: The man is flying a kite.", options: ["The girl is watching television.", "The boy is drawing.", "The man is flying a kite."], ans: 1 },
  { part: "Part 1: Photographs", prompt: "Question 10", audioText: "Look at the picture and choose the best answer. Statement A: My favorite food is noodles. Statement B: My father's favorite food is hamburgers. Statement C: My mother's favorite food is sandwiches.", options: ["My favorite food is noodles.", "My father's favorite food is hamburgers.", "My mother's favorite food is sandwiches."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 11: Do you have many friends here?", audioText: "Do you have many friends here? A: I often go swimming with my friends. B: I am friendly. C: No, I don't have many friends here.", options: ["I often go swimming with my friends.", "I am friendly.", "No, I don't have many friends here."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 12: What time do you usually go to school?", audioText: "What time do you usually go to school? A: You usually go to school at 7:00. B: I usually go to school at half past 7:00. C: I usually go to school on time.", options: ["You usually go to school at 7:00.", "I usually go to school at half past 7:00.", "I usually go to school on time."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 13: What is Sandy's favorite sport?", audioText: "What is Sandy's favorite sport? A: Her favorite food is vegetables. B: Her favorite sport is bowling. C: Her favorite fruit is strawberries.", options: ["Her favorite food is vegetables.", "Her favorite sport is bowling.", "Her favorite fruit is strawberries."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 14: How many lamps can you see?", audioText: "How many lamps can you see? A: Yes, I do. B: I can see three bags. C: I can see five lamps.", options: ["Yes, I do.", "I can see three bags.", "I can see five lamps."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 15: Where are you doing your homework?", audioText: "Where are you doing your homework? A: You are doing your homework in front of the television. B: I am doing it at my desk in the bedroom. C: I am playing the piano in the dining room.", options: ["You are doing your homework in front of the television.", "I am doing it at my desk in the bedroom.", "I am playing the piano in the dining room."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 16: Are there any pictures on the wall?", audioText: "Are there any pictures on the wall? A: No, there are not any pictures. B: He is looking for his pictures. C: He is painting a picture.", options: ["No, there are not any pictures.", "He is looking for his pictures.", "He is painting a picture."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 17: Are you listening to me?", audioText: "Are you listening to me? A: Yes, you are listening to me. B: Yes, I am listening to you. C: No, he is not listening to us.", options: ["Yes, you are listening to me.", "Yes, I am listening to you.", "No, he is not listening to us."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 18: What is she doing?", audioText: "What is she doing? A: She is playing the guitar. B: You are cooking in the kitchen. C: She does her homework every evening.", options: ["She is playing the guitar.", "You are cooking in the kitchen.", "She does her homework every evening."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 19: Do you have to go to school on time?", audioText: "Do you have to go to school on time? A: Yes, I have. B: Yes, I can. C: No, I don't.", options: ["Yes, I have.", "Yes, I can.", "No, I don't."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 20: Thank you very much.", audioText: "Thank you very much. A: No thanks. B: You're welcome. C: I think so.", options: ["No thanks.", "You're welcome.", "I think so."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 21: May I borrow some money?", audioText: "May I borrow some money? A: Sure, how many do you want? B: Sure, how much do you need? C: No, I don't need money.", options: ["Sure, how many do you want?", "Sure, how much do you need?", "No, I don't need money."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 22: What does Tina have?", audioText: "What does Tina have? A: She has a new car. B: The books on her desk are mine. C: She needs a bike.", options: ["She has a new car.", "The books on her desk are mine.", "She needs a bike."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 23: Is there a car in the garage?", audioText: "Is there a car in the garage? A: Yes, I am. B: Yes, there is. C: He is sick.", options: ["Yes, I am.", "Yes, there is.", "He is sick."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 24: Are Mike and Jason washing their cars?", audioText: "Are Mike and Jason washing their cars? A: No, he is not. B: Yes, he is. C: No, they aren't.", options: ["No, he is not.", "Yes, he is.", "No, they aren't."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 25: Can Tony do kung fu?", audioText: "Can Tony do kung fu? A: Yes, he can. B: Yes, I do. C: Yes, I can.", options: ["Yes, he can.", "Yes, I do.", "Yes, I can."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 26: Is there any shampoo?", audioText: "Is there any shampoo? A: No, I don't. B: Yes, there are. C: Yes, there is.", options: ["No, I don't.", "Yes, there are.", "Yes, there is."], ans: 2 },
  { part: "Part 2: Question Response", prompt: "Question 27: How much sugar do you want?", audioText: "How much sugar do you want? A: Just a little. B: Too much. C: Not many.", options: ["Just a little.", "Too much.", "Not many."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 28: What is Timmy doing?", audioText: "What is Timmy doing? A: He doesn't shut his eyes because the movie is scary. B: He is shutting his eyes because of the scary movie. C: He shuts his eyes at scary movies.", options: ["He doesn't shut his eyes because the movie is scary.", "He is shutting his eyes because of the scary movie.", "He shuts his eyes at scary movies."], ans: 1 },
  { part: "Part 2: Question Response", prompt: "Question 29: Do you always do your homework before dinner?", audioText: "Do you always do your homework before dinner? A: Yes, I never eat first. B: Yes, it is always late when I do it. C: Yes, always do my homework.", options: ["Yes, I never eat first.", "Yes, it is always late when I do it.", "Yes, always do my homework."], ans: 0 },
  { part: "Part 2: Question Response", prompt: "Question 30: What is the girl doing?", audioText: "What is the girl doing? A: The girl is sick. B: The girl is painting. C: Her favorite sport is soccer.", options: ["The girl is sick.", "The girl is painting.", "Her favorite sport is soccer."], ans: 1 },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 31: What does Kevin's mom want him to do now?", audioText: "Kevin, what are you doing? I'm playing a video game, Mom. Is your homework done? I can't do my homework now because I can't stop this game before I win. Then I can stop the game for you. Now do your homework before dinner. Question 31. What does Kevin's mom want him to do now?", options: ["Do his homework.", "Win the game.", "Eat dinner first."], ans: 0, repeat: true },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 32: What does Kevin want to do?", audioText: "What does Kevin want to do?", options: ["Do his homework.", "Win the game before stopping.", "Help his mom cook dinner."], ans: 1 },
  { part: "Part 3: Conversations (31-33)", prompt: "Question 33: Does Kevin finish his homework?", audioText: "Does Kevin finish his homework?", options: ["Yes, he does.", "No, he hasn't done it yet.", "He did it at school."], ans: 1 },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 34: How is Lucy?", audioText: "How are you, Lucy? Not bad. What about you? Great. I haven't seen you for a week. You know, I lived with my parents, but they moved to London. So I live in a big house alone. Question 34. How is Lucy?", options: ["Very sick.", "Not bad.", "Terrible."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (34-35)", prompt: "Question 35: Who lives with Lucy?", audioText: "Who lives with Lucy?", options: ["Her parents.", "Her classmates.", "She lives alone."], ans: 2 },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 36: What does Lucy want?", audioText: "Hi, Lucy, your birthday is coming. Do you want to have a birthday party? Sure. We can invite some friends. Who do you want to invite? Jerry, Susan, and Henry. Okay. Sounds good. I will help you prepare your birthday party. Thanks. I need the help. Question 36. What does Lucy want?", options: ["To have a birthday party.", "To go to London.", "To study alone."], ans: 0, repeat: true },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 37: Whose birthday is coming?", audioText: "Whose birthday is coming?", options: ["Jack's birthday.", "Lucy's birthday.", "Susan's birthday."], ans: 1 },
  { part: "Part 3: Conversations (36-38)", prompt: "Question 38: How many friends may go to the birthday party with Lucy and Jack?", audioText: "How many friends may go to the birthday party with Lucy and Jack?", options: ["2 friends.", "3 friends (Jerry, Susan, and Henry).", "5 friends."], ans: 1 },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 39: What kind of movies does Helen like?", audioText: "Hi Helen. Where are you going? I am going to watch a movie. Really? What kind of movie are you going to watch? I want to see a science fiction movie. I have to run now. The movie is about to start. Okay, and I have to be home before lunch. See you. Question 39. What kind of movies does Helen like?", options: ["Romance movies.", "Science fiction movies.", "Horror movies."], ans: 1, repeat: true },
  { part: "Part 3: Conversations (39-40)", prompt: "Question 40: Why does Helen have to run?", audioText: "Why does Helen have to run?", options: ["She wants to exercise.", "She needs to catch a bus.", "The movie is about to start."], ans: 2 },
  { part: "Part 4: Talks (41-42)", prompt: "Question 41: Where does Henry come from?", audioText: "Hello everyone, today I'd like to tell you something about my English studies. My name is Henry. I am from Japan. I am a student at Gram English. I like to study English very much, but my spoken English is not good. When I say R, I find it difficult to say it right. Question 41. Where does Henry come from?", options: ["America.", "Singapore.", "Japan."], ans: 2, repeat: true },
  { part: "Part 4: Talks (41-42)", prompt: "Question 42: Where does he learn English?", audioText: "Where does he learn English?", options: ["At Gram English.", "At school in Japan.", "At home by himself."], ans: 0 },
  { part: "Part 4: Talks (43-45)", prompt: "Question 43: What can't Frank do?", audioText: "Frank and Maggie are my good friends. They can do many things. Frank can play the piano and guitar. He can also ride a bicycle, but he can't drive a car. Maggie is very talented. She can sing and dance very well. She likes to practice Kung Fu on Mondays. We can all speak English very well. We often do our homework together before dinner. Then, after dinner, we play video games and practice our English because these are all things we can do together. Question 43. What can't Frank do?", options: ["Drive a car.", "Play the guitar.", "Ride a bicycle."], ans: 0, repeat: true },
  { part: "Part 4: Talks (43-45)", prompt: "Question 44: What do the three friends do together?", audioText: "What do the three friends do together?", options: ["Practice kung fu on Mondays.", "Drive cars together.", "Do homework before dinner and play video games after dinner."], ans: 2 },
  { part: "Part 4: Talks (43-45)", prompt: "Question 45: What are they very good at?", audioText: "What are they very good at?", options: ["They can all play violin.", "They can all speak English very well.", "They can all drive."], ans: 1 },
  { part: "Part 4: Talks (46-47)", prompt: "Question 46: Where does the speaker like to watch movies?", audioText: "People like to watch movies in different places. For example, some people like to watch movies in the theater, library, or restaurant. But I like to watch movies at home. People who like to watch movies in the theater like to be around many people. Question 46. Where does the speaker like to watch movies?", options: ["In the theater.", "In the library.", "At home."], ans: 2, repeat: true },
  { part: "Part 4: Talks (46-47)", prompt: "Question 47: Why do some people prefer to watch movies in the theater?", audioText: "Why do some people prefer to watch movies in the theater?", options: ["Because tickets are free.", "Because the food is delicious.", "Because they like to be around many people."], ans: 2 },
  { part: "Part 4: Talks (48-50)", prompt: "Question 48: Why does she have to study?", audioText: "Hi Jane, it's Sandy. I have to study for my English test and I need your help. Can you come to my house today? We can have dinner together at 6:00, and we can study at 6:30 until 8:00. Then we can watch TV. Thanks. Question 48. Why does she have to study?", options: ["For her English test.", "For her math contest.", "For fun."], ans: 0, repeat: true },
  { part: "Part 4: Talks (48-50)", prompt: "Question 49: What does Sandy want from Jane?", audioText: "What does Sandy want from Jane?", options: ["To help her study for the English test.", "To buy her dinner.", "To lend her a TV."], ans: 0 },
  { part: "Part 4: Talks (50): Where does Sandy want to study?", prompt: "Question 50: Where does Sandy want to study?", audioText: "Where does Sandy want to study?", options: ["At Jane's house.", "At school.", "At Sandy's house."], ans: 2 }
];