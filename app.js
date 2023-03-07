var arr = [];
     // создается пустой массив, внутрь которого будут помещаться имена 

for (var stopCycle = 'stop'; command != stopCycle;) { // создается бесконечный цикл, который можно прервать командой stop
    var userName = prompt('Имя');  
                             //поле ввода пользователя
    var command = prompt('add / del / stop ?'); 
     // создается переменная с командами (add (добавляем элемент в массив) / del(удаление элемента из массива) / stop(остановка цикла))

    if(command == 'add'){ 
                     //проверяет на команду add(добавляем элемент)
        arr.push(userName)  
                   //добавляем элемент в массив
               console.log(`вы добавили элемент: ${userName}`); //в консоли выводится информация о добавлении
    }else if(command == 'del') {
               //проверяет на команду del(удаляем элемент)
        let deleteCommand = arr.indexOf(userName)
            //получаем позицию справа
        let deleteCommand2 = arr.lastIndexOf(userName)
         //получаем позицию слева 
        arr.splice(deleteCommand, deleteCommand2)
           //удаляем нужный нам элемент (начиная от deleteCommand, заканчивая deleteCommand2)
              console.log(`вы удалили элемент: ${userName}`);   //в консоли выводится информация об удалении
    }
    

   
}
console.log(arr);
  // после завершения цикла  (command == stop) выводим массив в консоль
