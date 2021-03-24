let weapons = Seq();

Vars.content.units().each(e=>{
  if (e != UnitTypes.crawler) {
    e.weapons.each(w=>{
      w.recoil = 0
      w.rotate = true;
      w.reload = 5;
      w.shootStatusDuration = 0;
      w != undefined ? weapons.add(w) : null;
    })
  }
});

weapons.each(w => {
  UnitTypes.gamma.weapons.add(w);
});

UnitTypes.gamma.health = Number.MAX_VALUE;
UnitTypes.gamma.armor = Number.MAX_VALUE;
