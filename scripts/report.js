Events.on(EventType.ClientLoadEvent, () => {
    const dialog = new BaseDialog("欢迎来到[#8CF0FF]极地科技\n模组版本:Alpha-0.2.0 ");
    
    dialog.cont.pane(table => {
        table.image(Core.atlas.find("极地科技-menu")).size(1024,512).pad(3).row();//size(图片大小)
        table.add("感谢游玩本模组！\n您的喜爱是我制作模组的动力\n\n注意：\n1.本模组处于测试阶段，模组还有大量内容未添加\n2.本模组贴图质量较低(其实也不太算？)\n如果你是对贴图质量较高的玩家，[red]最好不要游玩本模组！").left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
        
        table.add("更新内容").pad(4).labelAlign(Align.center).row();
        table.image(Tex.whiteui, Pal.accent).growX().height(3).pad(4).row();
        table.add("1.添加了白铜，以及白铜墙\n2.添加了新的区块（冰面平原）\n3.添加了新的炮台（海狮，引力）\n4.更改了以下内容：\n4.1.更改了“先驱”炮台炮口发热动画\n4.2.更改了某些机器的用电量，耗材").left().growX().wrap().width(420).maxWidth(420).pad(4).labelAlign(Align.left).row();
    });
    dialog.buttons.button("关闭",run(() => {
        dialog.hide();
    })).size(128,64)//size(按钮大小)
    
    dialog.show();
})