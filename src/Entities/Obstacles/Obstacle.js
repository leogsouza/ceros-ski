import * as Constants from "../../Constants";
import { Entity } from "../Entity";
import { randomInt } from '../../Core/Utils';

const assetTypes = [
    Constants.TREE,
    Constants.TREE_CLUSTER,
    Constants.ROCK1,
    Constants.ROCK2,
    Constants.JUMP_RAMP,
];

export class Obstacle extends Entity {
    constructor(x, y) {
        super(x, y);

        const assetIdx = randomInt(0, assetTypes.length - 1);
        this.assetName = assetTypes[assetIdx];

        this.canJump = true;

        if (this.assetName === Constants.TREE || this.assetName === Constants.TREE_CLUSTER) {
            this.canJump = false;
        }
    }
}