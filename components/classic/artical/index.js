import { classicBehavior} from '../behaviors/classic_behavior'
Component({
    behaviors: [classicBehavior],
    properties: {
        hidden: {
            type: Boolean,
            value: true,
        }
    }
})