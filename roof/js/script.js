// указать класс . id # подключили связку формы с js
let validation = new JustValidate('#form',{
    errorLabelStyle: {
      color: '#F38120'
    }
  })
  
  let selector = document.querySelector("#phone")
  let im = new Inputmask("+7(999)999-99-99")
  im.mask(selector)

// связка какое поле хотим проверять
  validation.addField("#phone", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length > 0)
      },
      errorMessage : 'Введите телефон'
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length === 10)
      },
      errorMessage : 'Введите телефон полностью'
    }
  ])





