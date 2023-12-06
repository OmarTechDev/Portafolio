const switchAddEdit = (show: string) => {

  var editPhone = document.getElementById('Edit_phone')
  var addPhone = document.getElementById('Addinfo_phone')

  if (editPhone && addPhone) {
    switch (show) {
      case 'add':
        editPhone.style.display = 'none';
        addPhone.style.display = 'block';
        break;

      default:
        addPhone.style.display = 'none'
        editPhone.style.display = 'block'
    }
  }
};

export default switchAddEdit;
