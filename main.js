import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "SuperFan";
var name = "Super Fan Theory";
var description = "Super Fan Theory";
var authors = "LG-Hazien";
var version = "1.0.0";

var sans;
var h1;

var init = () => {
    currency = theory.createCurrency("S", "S");

    // Upgrade!!
    // h1
    {
        let getDesc = (level) => "h_1=2^{" + getH1(level).toString(0) + "}";
        let getInfo = (level) => "h_1=2^{" + getH1(level).toString(0) + "}";
        h1 = theory.createUpgrade(0, sans, new ExponentialCost(100, 4));
        h1.getDescription = (_) => Utils.getMath(getDesc(h1.level));
        h1.getInfo = (amount) => Utils.getMathTo(getDesc(h1.level), getDesc(h1.level + amount));
    }

    // Story Chapters
    let story_chapter_1 = "";
    story_chapter_1 += "You started the game!.\n"
    story_chapter_1 += "Ah yes i can we you play this\n"
    story_chapter_1 += "Nice game, Will be work :)\"\n"
    story_chapter_1 += "So easy to play and\n";
    story_chapter_1 += "cool COOL cool game works\n\n"
    story_chapter_1 += "Look we says\n";
    story_chapter_1 += "Lol lol lol nah so cool gamer!\n";
    story_chapter_1 += "Ah yes so i cool games i works for eulers formula.\n";
    story_chapter_1 += "Lol Lol Lol! :)";
    theory.createStoryChapter(0, "Started", story_chapter_1, () => true);

    // Achievements
    let achievement_category_1 = theory.createAchievementCategory(0, "Tau");
    let achievement_category_2 = theory.createAchievementCategory(1, "Sans");

    theory.createAchievement(10000, achievement_category_1, "Getting Started", "Reach 100000τ.", () => theory.tau > 1e5);
    theory.createAchievement(10001, achievement_category_1, "Lol much", "Reach 1e10τ.", () => theory.tau > 1e10);

    theory.createAchievement(20000, achievement_category_2, "1 Million Sans???", "Reach 1e6 sans.", () => sans.value > 1e6);
    theory.createAchievement(20001, achievement_category_2, "1 Billion Sans???", "Reach 1e9 sans.", () => sans.value > 1e9);
}

var getTau = () => sans.value;
var getPublicationMultiplier = (tau) => BigNumber.ONE;
var getPublicationMultiplierFormula = (symbol) => "1";

var getH1 = (level) => BigNumber.TWO.pow(level);

init();