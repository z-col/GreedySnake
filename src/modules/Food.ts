class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    //获取食物x轴坐标
    get X() {
        return this.element.offsetLeft;
    }
    //获取食物y轴坐标
    get Y() {
        return this.element.offsetTop;
    }
    //随机坐标
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}

export default Food;