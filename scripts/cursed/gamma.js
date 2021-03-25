let weapons = new Seq;
let gamma = true; // toggle off to make this for all units

Vars.content.units().each(e => {
  e.weapons.each(w => {
    w.recoil = 0;
    w.rotate = true;
    w.reload = 5;
    w.shootStatusDuration = 0;
	w.bullet.killShooter = false;
    w != undefined ? weapons.add(w) : null;
  });
  if (!gamma || u == UnitTypes.gamma) {
    weapons.each(w => {
      u.weapons.add(w);
    });
    u.health = Number.MAX_VALUE;
    u.armor = Number.MAX_VALUE;
  }
});
