export declare class EventDispatcher<TSender, TArgs> implements IEvent<TSender, TArgs> {
    private handlers;
    Off(handler: (sender: TSender, args: TArgs) => void): void;
    On(handler: (sender: TSender, args: TArgs) => void): void;
    Trigger(sender: TSender, args: TArgs): void;
}
export interface IEvent<TSender, TArgs> {
    Off(handler: (sender: TSender, args: TArgs) => void): void;
    On(handler: (sender: TSender, args: TArgs) => void): void;
}
