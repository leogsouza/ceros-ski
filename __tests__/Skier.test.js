import 'babel-polyfill';

import { Skier } from '../src/Entities/Skier';
import * as Constants from '../src/Constants';

let skier;

beforeEach(() => {
    skier = new Skier(0, 0);
})

describe('Test Skier', () => {

    describe('Initilization', () => {
        test('should skier to be initialized', () => {
            expect(skier).not.toBeNull();
        });
    })

    describe('Directions tests', () => {

        test('it should direction set down', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
        });

        test('it should direction set left', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT)
        });

        test('it should direction set left_down', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT_DOWN);
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT_DOWN)
        });

        test('it should direction set right', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT)
        });

        test('it should direction set right_down', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT_DOWN)
        })

    });

    describe('Moving tests', () => {

        describe('pressing down key', () => {

            test('it should go down when direction is left', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT);

                skier.turnDown();

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
            });

            test('it should go down when direction is left_down', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT_DOWN);

                skier.turnDown();

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
            });

            test('it should go down when direction is right', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);

                skier.turnDown();

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
            });

            test('it should go down when direction is right_down', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);

                skier.turnDown();

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
            });

            test('it should still going down when direction is down', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);

                skier.turnDown();

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
            });
        });

        describe('pressing up key', () => {
            test('it should go up when direction is LEFT', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT);

                const startPosY = skier.y;
                skier.turnUp(); 

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
                expect(skier.y).toBeLessThan(startPosY);

            });

            test('it should go up when direction is RIGHT', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
                const startPosY = skier.y;
                skier.turnUp();

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
                expect(skier.y).toBeLessThan(startPosY);
            });


            test('it should not go up when direction is LEFT_DOWN', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT_DOWN);

                const startPosY = skier.y;
                skier.turnUp(); 

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT_DOWN);
                expect(skier.y).toBe(startPosY);

            });

            test('it should go up when direction is RIGHT_DOWN', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);
                const startPosY = skier.y;
                skier.turnUp();

                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);
                expect(skier.y).toBe(startPosY);
            });
        });

        describe('pressing keys on move', () => {
            test('it should direction to be down on first move', () => {
                skier.move();
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
            });
    
            test('it should direction be left_down on turn left once after move', () => {
                skier.move();
                skier.turnLeft();
    
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT_DOWN);
            });
    
            test('it should direction be left on turn left twice after move', () => {
                skier.move();
    
                skier.turnLeft();
                skier.turnLeft();
    
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
            });
    
            test('it should direction to be right_down on turn right once after move', () => {
                skier.move();
    
                skier.turnRight();
    
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);
            });
    
            test('it should direction to be right on turn right twice after move', () => {
                skier.move();
    
                skier.turnRight();
                skier.turnRight();
    
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
            });
    
            test('it should move left down', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT_DOWN);
                skier.move();
    
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT_DOWN);
            });
    
            test('it should move right down', () => {
                skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);
                skier.move();
    
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT_DOWN);
            });
    
            test('it should move turn down', () => {
    
                skier.turnDown();
    
                expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.DOWN);
            });
        });       

    });

    describe('Skier Crashed', () => {
        test('the game should not be crashed when on turn left after crash direction', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
    
            skier.turnLeft();
    
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
        });
    
        test('the game should not be crashed when on turn right after crash direction', () => {
            skier.setDirection(Constants.SKIER_DIRECTIONS.CRASH);
    
            skier.turnRight();
    
            expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
        });
    });
});



