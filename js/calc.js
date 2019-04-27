$(document).ready(function(){
// =============== calc ===============
// Определяем собственный фильтр валют "currency".
var demo = new Vue({
el: '#price',
data: {
searchString: "",

    services: [
                {
            name: 'Диагностика ПК',
            price: 1000,
            active: false
        },
        {
            name: '	Оптимизация ПК',
            price:  10000,
            active: false
        },
        {
            name: 'Установка ПО',
            price: 4500,
            active: false
        },
        {
            name: 'Установка Антивируса(с носителя клиента)',
            price: 1500,
            active: false
        },
        {
            name: '	Восстановление данных с носителей(цена за 1гб данных)',
            price: 1500,
            active: false
        },
        {
            name: 'Сборка ПК под ключ',
            price: 1500,
            active: false
        },
        {
            name: '	Ремонт ПК(В зависимости с работой цена может быть выше)',
            price: 1500,
            active: false
        },
        {
            name: 'Оптимизация Игр',
            price: 1500,
            active: false
        },
        {
            name: 'Установка VPN сервисов',
            price: 1500,
            active: false
        },
        {
            name: '	Обслуживание ПК',
            price: 1500,
            active: false
        }
        ],

    Discount:[
        {
            name:'Скидка',
            active:false,
            discount2:5,
            promo:"misha"
        }
    ]


}, 
methods: {
    countDiscoint: function(){
      if(this.searchString==this.Discount[0].promo){
            this.Discount[0].active = true;}   
    },
    toggleActive: function(s){
        s.active = !s.active;
    },
    toggleDiscount:function(s){
        s.active = !s.active;
    },

    total: function(){

        var total = 0;

        this.services.forEach(function(s){
            if (s.active){
                total+= s.price;
            }
        });

      if (this.Discount[0].active){
      total = total/100*(100-this.Discount[0].discount2);
       }
       return total;
    }
}
});
});