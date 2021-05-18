import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";

export class Rhino extends Entity {
  assetName = Constants.RHINO_DEFAULT;
  rhinoMove = Constants.RHINO_MOVES.RUN_LEFT;
  speed = Constants.RHINO_STARTING_SPEED;
  distance = Constants.DISTANCE_BETWEEN_RHINO_SKIER;
  skierPosition;
  skier;

  isChasing = false;
  caughtSkier = false;
  eatStarted = false;

  constructor(x, y) {
    super(x, y)
  }

  updateAsset() {
    this.assetName = Constants.RHINO_MOVE_ASSET[this.rhinoMove];
  }

  

  setDistance() {
    this.distance = this.distance - this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER;
    if (this.distance < 0) {
      this.distance = 0;
    }
  }
  
  setSkier(skier) {
    this.skier = skier;
    this.setSkierPosition(this.skier.getPosition());
  }

  setSkierPosition(skierPosition) {
    this.skierPosition = skierPosition;
  }

  setRhinoPosition() {
    this.x = this.skierPosition.x + this.distance;
    this.y = this.skierPosition.y - this.distance;
  }

  move() {
   this.setRhinoPosition();
   
   if (this.isChasing) {
     this.setDistance();
   }
   
   if (!this.eatStarted) {
     this.toggleRhinoMoveAsset();
   }
  }

  toggleRhinoMoveAsset() {
    return this.rhinoMove === Constants.RHINO_MOVES.RUN_LEFT ? Constants.RHINO_MOVES.RUN_LEFT2 : 
                Constants.RHINO_MOVES.RUN_LEFT;
  }

  eat() {
    this.eatStarted = true;
    this.eatingAnimation();
  }

  eatingAnimation() {
    let eatingStage = Constants.RHINO_EAT_STAGES.LIFT;
    let animation = setInterval(() => {
      if (eatingStage == Constants.RHINO_EAT_STAGES.EAT4) {
        clearInterval(animation);
      }
      
      this.assetName = Constants.RHINO_EAT_ASSET[eatingStage];
      eatingStage++;
    }, Constants.RHINO_TIME_START_EAT_INTERVAL);
  }

  draw(canvas, assetManager) {
    
    if (!this.isChasing)
        return;
    super.draw(canvas, assetManager);
}

  checkIfRhinoCaughtSkier(skier) {
    if (this.distance === 0 && !this.eatStarted) {
        skier.hide();
        this.eat();
    }
  }

  getBounds(target) {
    const asset = this.assetManager.getAsset(target.assetName);
    const targetBounds = new Rect(
        target.x - asset.width / 2,
        target.y - asset.height / 2,
        target.x + asset.width / 2,
        target.y - asset.height / 4
    );
    return targetBounds;
}

}