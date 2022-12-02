(() => {
    UnitTypes.dagger.weapons.get(0).shootSound = Sounds.shoot;
    UnitTypes.fortress.weapons.get(0).shootSound = Sounds.mediumCannon;
    UnitTypes.scepter.weapons.get(0).shootSound = Sounds.mediumCannon;
    UnitTypes.scepter.weapons.get(1).shootSound = Sounds.shoot;
    UnitTypes.scepter.weapons.get(2).shootSound = Sounds.shoot;
    UnitTypes.reign.weapons.get(0).shootSound = Sounds.artillery;

    UnitTypes.risso.weapons.get(0).shootSound = Sounds.shoot;
    UnitTypes.bryde.weapons.get(0).shootSound = Sounds.shootBig;
    UnitTypes.minke.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.sei.weapons.get(0).shootSound = Sounds.missileSmall;
    UnitTypes.sei.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.cyerce.weapons.get(1).shootSound = Sounds.blaster;
    UnitTypes.navanax.weapons.get(1).shootSound = Sounds.blaster;

    UnitTypes.arkyid.weapons.get(3).shootSound = Sounds.shootBig;
    UnitTypes.toxopid.weapons.get(0).shootSound = Sounds.shotgun;

    UnitTypes.horizon.weapons.get(0).shootSound = Sounds.mineDeploy;
    UnitTypes.antumbra.weapons.get(2).shootSound = Sounds.mediumCannon;
    UnitTypes.eclipse.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.eclipse.weapons.get(2).shootSound = Sounds.mediumCannon;

    UnitTypes.stell.weapons.get(0).shootSound = Sounds.mediumCannon;
    UnitTypes.precept.weapons.get(0).shootSound = Sounds.shootBig;
    UnitTypes.vanquish.weapons.get(0).shootSound = Sounds.shootBig;
    UnitTypes.vanquish.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.vanquish.weapons.get(2).shootSound = Sounds.mediumCannon;

    UnitTypes.merui.weapons.get(0).shootSound = Sounds.blaster;
    UnitTypes.anthicus.weapons.get(0).bullet.spawnUnit.weapons.get(0).shootSound = Sounds.none;

    UnitTypes.quell.weapons.get(0).bullet.spawnUnit.weapons.get(0).shootSound = Sounds.none;
    UnitTypes.disrupt.weapons.get(0).bullet.spawnUnit.weapons.get(0).shootSound = Sounds.none;

    Blocks.scatter.shootSound = Sounds.shoot;
    Blocks.diffuse.shootSound = Sounds.shotgun;
    Blocks.hail.shootSound = Sounds.mediumCannon;
    Blocks.salvo.shootSound = Sounds.mediumCannon;
    Blocks.cyclone.shootSound = Sounds.mediumCannon;
})();

Events.on(FileTreeInitEvent, (event) => {
    const daggergun1 = loadSound("daggergun1");
    console.log(daggergun1);
    UnitTypes.gamma.weapons.get(0).shootSound = daggergun1;
});