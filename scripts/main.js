(() => {
    var _Sounds = {};
    function loadSound(fileName) {
        if (!_Sounds[fileName]) {
            _Sounds[fileName] = Vars.tree.loadSound(fileName);
        }
        return _Sounds[fileName];
    }
    function loadSounds(fileNames) {
        fileNames.forEach(fileName => { return loadSound(fileName); });
    }

    loadSounds([
        "blaster0",
        "blaster1impact",
        "blaster2",
        "gun0",
        "gun1",
        "gun2",
        "sap0",
        "missile0",
        "missile1",
        "missile2",
        "missile3",
        "missile3impact",
        "missile4",
        "missile4impact",
        "missile5",
        "missile5impact",
        "missile6",
        "laser0",
        "laser1",
        "laser2",
        "laser3",
        "laser4",
        "railgun0",
        "reactorDrone5"
    ]);

    UnitTypes.alpha.weapons.get(0).shootSound = _Sounds.gun0;
    UnitTypes.beta.weapons.get(0).shootSound = _Sounds.gun0;
    UnitTypes.gamma.weapons.get(0).shootSound = _Sounds.gun0;

    UnitTypes.dagger.weapons.get(0).shootSound = _Sounds.gun1;
    UnitTypes.fortress.weapons.get(0).shootSound = Sounds.mediumCannon;
    UnitTypes.scepter.weapons.get(0).shootSound = Sounds.mediumCannon;
    UnitTypes.scepter.weapons.get(1).shootSound = _Sounds.gun2;
    UnitTypes.scepter.weapons.get(2).shootSound = _Sounds.gun2;
    UnitTypes.reign.weapons.get(0).shootSound = Sounds.artillery;

    UnitTypes.nova.weapons.get(0).shootSound = _Sounds.blaster2;
    UnitTypes.quasar.weapons.get(0).shootSound = _Sounds.laser1;

    UnitTypes.spiroct.weapons.get(0).shootSound = _Sounds.sap0;
    UnitTypes.arkyid.weapons.get(0).shootSound = _Sounds.sap0;
    UnitTypes.arkyid.weapons.get(1).shootSound = _Sounds.sap0
    UnitTypes.arkyid.weapons.get(2).shootSound = _Sounds.sap0;
    UnitTypes.arkyid.weapons.get(3).shootSound = Sounds.shootBig;
    UnitTypes.arkyid.weapons.get(3).bullet.hitSound = Sounds.spark;
    UnitTypes.toxopid.weapons.get(0).shootSound = Sounds.shotgun;

    UnitTypes.flare.weapons.get(0).shootSound = _Sounds.gun0;
    UnitTypes.horizon.weapons.get(0).shootSound = Sounds.mineDeploy;
    UnitTypes.zenith.weapons.get(0).shootSound = _Sounds.missile6;
    UnitTypes.antumbra.weapons.get(0).shootSound = _Sounds.missile6;
    UnitTypes.antumbra.weapons.get(1).shootSound = _Sounds.missile6;
    UnitTypes.antumbra.weapons.get(2).shootSound = Sounds.mediumCannon;
    UnitTypes.eclipse.weapons.get(0).shootSound = _Sounds.laser4;
    UnitTypes.eclipse.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.eclipse.weapons.get(2).shootSound = Sounds.mediumCannon;
    UnitTypes.toxopid.weapons.get(1).bullet.hitSound = Sounds.spark;
    UnitTypes.toxopid.weapons.get(1).bullet.fragBullet.hitSound = Sounds.spark;

    UnitTypes.poly.weapons.get(0).shootSound = _Sounds.missile3;
    UnitTypes.poly.weapons.get(0).bullet.hitSound = _Sounds.missile3impact;
    UnitTypes.mega.weapons.get(0).shootSound = _Sounds.blaster2;
    UnitTypes.mega.weapons.get(1).shootSound = _Sounds.blaster2;

    UnitTypes.risso.weapons.get(0).shootSound = _Sounds.gun2;
    UnitTypes.risso.weapons.get(1).shootSound = _Sounds.missile4;
    UnitTypes.bryde.weapons.get(0).shootSound = Sounds.shootBig;
    UnitTypes.bryde.weapons.get(1).shootSound = _Sounds.missile4;
    UnitTypes.minke.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.sei.weapons.get(0).shootSound = _Sounds.missile4;
    UnitTypes.sei.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.omura.weapons.get(0).shootSound = _Sounds.railgun0;

    UnitTypes.cyerce.weapons.get(1).shootSound = _Sounds.missile3;
    UnitTypes.cyerce.weapons.get(1).bullet.despawnSound = _Sounds.missile3impact;
    UnitTypes.cyerce.weapons.get(1).bullet.fragBullet.hitSound = _Sounds.blaster1impact;
    UnitTypes.navanax.weapons.get(4).shootSound = _Sounds.missile5;
    UnitTypes.navanax.weapons.get(4).bullet.hitSound = _Sounds.missile5impact;

    UnitTypes.stell.weapons.get(0).shootSound = Sounds.mediumCannon;
    UnitTypes.locus.weapons.get(0).shootSound = _Sounds.laser3;
    UnitTypes.precept.weapons.get(0).shootSound = Sounds.shootBig;
    UnitTypes.precept.weapons.get(0).bullet.hitSound = _Sounds.missile4impact;
    UnitTypes.vanquish.weapons.get(0).shootSound = Sounds.shootBig;
    UnitTypes.vanquish.weapons.get(0).bullet.despawnSound = _Sounds.missile4impact;
    UnitTypes.vanquish.weapons.get(1).shootSound = Sounds.mediumCannon;
    UnitTypes.vanquish.weapons.get(2).shootSound = Sounds.mediumCannon;

    UnitTypes.merui.weapons.get(0).shootSound = _Sounds.blaster0;
    UnitTypes.anthicus.weapons.get(0).shootSound = _Sounds.missile1;
    UnitTypes.anthicus.weapons.get(0).bullet.spawnUnit.weapons.get(0).shootSound = Sounds.bang;

    UnitTypes.quell.weapons.get(0).shootSound = _Sounds.missile1;
    UnitTypes.quell.weapons.get(0).bullet.spawnUnit.weapons.get(0).shootSound = Sounds.bang;
    UnitTypes.disrupt.weapons.get(0).shootSound = _Sounds.missile1;
    UnitTypes.disrupt.weapons.get(0).bullet.spawnUnit.weapons.get(0).shootSound = Sounds.bang;

    Blocks.duo.shootSound = _Sounds.gun0;
    Blocks.scatter.shootSound = Sounds.shoot;
    //Blocks.scorch = Sounds.flame;
    Blocks.hail.shootSound = Sounds.mediumCannon;
    Blocks.swarmer.shootSound = _Sounds.missile0;
    Blocks.salvo.shootSound = Sounds.mediumCannon;
    Blocks.cyclone.shootSound = Sounds.mediumCannon;
    Blocks.foreshadow.shootSound = _Sounds.railgun0;

    Blocks.diffuse.shootSound = Sounds.shotgun;
})();