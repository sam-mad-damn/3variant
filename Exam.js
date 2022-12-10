//1 способ создания класса
export function Exam(surname, name, scoreBD, scoreJS, scorePHP) {
    this.name = name;
    this.surname = surname;
    this.scoreBD = scoreBD;
    this.scoreJS = scoreJS;
    this.scorePHP = scorePHP;
    this.toString = () => {
        return `${this.surname} ${this.name} получил оценки за экзамены: БД - ${this.scoreBD}, JS - ${this.scoreJS}, PHP - ${this.scorePHP},`
    };
}

Object.defineProperties(Exam.prototype, {
    sredBall: {
        get() {
            return Math.floor((this.scoreBD + this.scoreJS + this.scorePHP) / 3);
        }
    },
    isHoroshist: {
        get() {
            if (this.scoreBD >= 4 && this.scoreJS >= 4 && this.scorePHP >= 4) return true;
            else return false;
        }
    },
    isDolzhnik: {
        get() {
            if (this.scoreBD < 3 || this.scoreJS < 3 || this.scorePHP < 3) return true
            else return false;
        }
    }
});

//2 способ
// export class Exam {
//     constructor(surname, name, scoreBD, scoreJS, scorePHP) {
//         this.name = name;
//         this.surname = surname;
//         this.scoreBD = scoreBD;
//         this.scoreJS = scoreJS;
//         this.scorePHP = scorePHP;
//     }

//     get isHoroshist() {
//         if (this.scoreBD >= 4 && this.scoreJS >= 4 && this.scorePHP >= 4) return true;
//         else return false;;
//     }
//     get isHoroshist() {
//         if (this.scoreBD < 3 || this.scoreJS < 3 || this.scorePHP < 3) return true
//         else return false;
//     }
//     get sredBall() {
//         return Math.floor((this.scoreBD + this.scoreJS + this.scorePHP) / 3);
//     }

//     //переопределим стандартный метод toString
//     toString() {
//         return `${this.surname} ${this.name} получил оценки за экзамены: БД - ${this.scoreBD}, JS - ${this.scoreJS}, PHP - ${this.scorePHP},`
//     }
// };
