const lib = require("lib");
const FPS = new Planet("霜原星", Planets.sun, 1, 3.3);
FPS.meshLoader = prov(() => new MultiMesh(
	new HexMesh(FPS, 6)
));
FPS.cloudMeshLoader = prov(() => new MultiMesh(
	new HexSkyMesh(FPS, 2, 0.15, 0.14, 5, Color.valueOf("8cf0ff"), 2, 0.42, 1, 0.43),
	new HexSkyMesh(FPS, 3, 0.6, 0.15, 5, Color.valueOf("29e3ff"), 2, 0.42, 1.2, 0.45)
));
FPS.generator = extend(SerpuloPlanetGenerator,{
    arr:[Blocks.ice,Blocks.snow],//更改地形生成，在方括号里
    getColor(position){
        var depth = Simplex.noise3d(4, 4, 0.56, 1.7, position.x, position.y, position.z) / 2;
        return Color.valueOf("8cf0ff").write(Color.valueOf("29e3ff")).lerp(Color.valueOf("edfdff"),Mathf.clamp(Mathf.round(depth, 0.25)));
}}),
FPS.visible = FPS.accessible = FPS.alwaysUnlocked = FPS.clearSectorOnLose = true;
FPS.tidalLock = false;
FPS.localizedName = "霜原星";
//如果有翻译文件就不需要写这个
FPS.bloom = false;
//不知道
FPS.startSector = 1;
//默认解锁的区域数量
FPS.orbitRadius = 100;
//星球半径
FPS.orbitTime = 180 * 60;
//自转时间(s)
FPS.rotateTime = 90 * 60;
//一昼夜的时间(s)
FPS.atmosphereRadIn = 0.02;
//大气素
FPS.atmosphereRadOut = 0.3;
//大气输出

FPS.atmosphereColor = FPS.lightColor = Color.valueOf("8cf0ff");
FPS.iconColor = Color.valueOf("8cf0ff");
FPS.hiddenItems.addAll(Items.erekirItems).removeAll(Items.serpuloItems);
/* const sS = require("sectorSize");
sS.planetGrid(FPS, 3.3); */
/* FPS.techTree = TechTree.nodeRoot("霜原星",FPS,() => {}) */
const map1 = new SectorPreset("point_of_intervention", FPS, 1);//名字 星球 区块
map1.description = "这里很安全\n这里是你们消灭敌人的第一关\n\n消灭所有敌人";
map1.difficulty = 2;//难度 1-10
map1.alwaysUnlocked = true;//总是解锁
map1.addStartingItems = true;//允许添加初始资源
map1.captureWave = 10;//多少波可占领
map1.localizedName = "介入点";
exports.map1 = map1;
lib.addToResearch(map1, {
    parent: "极地科技-point_of_intervention",
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.planetaryTerminal))
}); 
const map2 = new SectorPreset("frozen_lake_center", FPS, 105);//名字 星球 区块
map2.description = "这片区块有积水，曾经有战斗的遗迹\n夺下该区块";
map2.difficulty = 3;//难度 1-10
map2.alwaysUnlocked = false;//总是解锁
map2.addStartingItems = true;//允许添加初始资源
map2.captureWave = 15;//多少波可占领
map2.localizedName = "冰冻湖心";
exports.map2 = map2;
lib.addToResearch(map2, {
    parent: '极地科技-point_of_intervention',
    objectives: Seq.with(
        new Objectives.SectorComplete(map1))
});
const map3 = new SectorPreset("ice_thorn_plain", FPS, 114);//名字 星球 区块
map3.description = "这里有着冰刺，地势非常平坦\n夺下该区块";
map3.difficulty = 3;//难度 1-10
map3.alwaysUnlocked = false;//总是解锁
map3.addStartingItems = true;//允许添加初始资源
map3.captureWave = 25;//多少波可占领
map3.localizedName = "冰刺平原";
exports.map3 = map3;
lib.addToResearch(map3, {
    parent: '极地科技-frozen_lake_center',
    objectives: Seq.with(
        new Objectives.SectorComplete(map2))
});
const map4 = new SectorPreset("frozen_plains", FPS, 20);//名字 星球 区块
map4.description = "敌人在这里建设了基地\n夺下该区块\n\n注：单位请自行解锁赛普罗单位";
map4.difficulty = 4;//难度 1-10
map4.alwaysUnlocked = false;//总是解锁
map4.addStartingItems = true;//允许添加初始资源
map4.localizedName = "冰面平原";
exports.map4 = map4;
lib.addToResearch(map4, {
    parent: '极地科技-ice_thorn_plain',
    objectives: Seq.with(
        new Objectives.SectorComplete(map3))
});
const map5 = new SectorPreset("frozen_canyon", FPS, 35);//名字 星球 区块
map5.description = "敌人在这里建设了基地\n夺下该区块\n\n注：单位请自行解锁赛普罗单位";
map5.difficulty = 5;//难度 1-10
map5.alwaysUnlocked = false;//总是解锁
map5.addStartingItems = true;//允许添加初始资源
map5.captureWave = 35;
map5.localizedName = "冰冻峡谷";
exports.map5 = map5;
lib.addToResearch(map4, {
    parent: '极地科技-frozen_plains',
    objectives: Seq.with(
        new Objectives.SectorComplete(map4))
});
