# ts-event

A micro library for strongly typed events.

## Installation

#### Install with NPM

```sh
$ npm install ts-event --save
```

#### Install with Yarn

```sh
$ yarn add ts-event --save
```

## Example

```javascript
import { EventDispatcher, IEvent } from 'ts-event';

class Sample {
    private onPropertyChanged: EventDispatcher<Sample, number> = new EventDispatcher<Sample, number>();
    private property: number = 0;

    public get Property(): number {
        return this.property;
    }

    public set Property(property: number) {
        this.property = property;

        //Trigger event
        this.onPropertyChanged.Trigger(this, this.Property);
    }

    public get OnPropertyChanged(): IEvent<Sample, number> {
        return this.onPropertyChanged;
    }
}

let handler = (sender, args) => {
    console.log('onPropertyChanged', sender, args);
};
let sample = new Sample();

//Register handler
sample.OnPropertyChanged.On(handler);

//Unregister handler
sample.OnPropertyChanged.Off(handler);
```