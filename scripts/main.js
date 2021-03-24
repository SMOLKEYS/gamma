let weapons = Seq();

Vars.content.units().each(e=>{
  if (e != UnitTypes.crawler) {
	print(e.weapons.each(w=>{
	  w != undefined ? weapons.add(w) : null
	}))
  }
});

weapons.each(w => {
	UnitTypes.gamma.weapons.add(w)
})
