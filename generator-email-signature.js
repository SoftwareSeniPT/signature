$(document).ready(function () {
  $("button[name=copy_pre]").click(function () {
    var id = $(this).data('target');
    var el = document.getElementById(id);
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    alert("Signature copied to clipboard.");
    return false;
  });

  $(document).on('click', '.remove-field', function (event) {
    event.preventDefault();
    const target = $(this).data('target');
    console.log(target, 'target');
    $(`#${target}`).remove();
  });

  function initTemplate(name) {
    $(`#add-${name}`).click((event) => {
      event.preventDefault();
      const rand = new Date().getTime();
      const html = $(`#${name}-template`).html();
      $("#form-canvas").append(`
      <div class="emailSignature__formItem" id="${rand}" data-type="${name}">
        ${html}
        <div>
          <button data-target="${rand}" class="remove-field">Remove</button>
        </div>
      </div>
    `)
    });
  }

  initTemplate('email');
  initTemplate('web');
  initTemplate('phone');
  initTemplate('fax');
  initTemplate('home');
  initTemplate('linkedin');
  initTemplate('twitter');
  initTemplate('facebook');
  initTemplate('instagram');

  $(document).on('click', '#generate-signature', function(event){
    event.preventDefault();
    const name = $('#field-name').val();
    const role = $('#field-role').val();
    const email = $('#field-email').val();
    const web = $('#field-web').val();
    const companyAddress = $('#field-company-address').val();
    if (!name) {
      return alert('Field name is mandatory');
    }
    if (!role) {
      return alert('Field role is mandatory');
    }
    if (!email) {
      return alert('Field email is mandatory');
    }
    if (!web) {
      return alert('Field web is mandatory');
    }
    const customFields = $('#form-canvas').children();
    const data = customFields.map((index, field) => {
      const name = $(field).data('type');
      const value = $(field).find('input').val();
      return {
        name,
        value,
      }
    });
    const socialList = ['twitter', 'facebook', 'instagram', 'linkedin'];
    const nonSocial = data.filter((index, field) => {
      if (!socialList.includes(field.name)) return true;
      return false;
    });
    const social = data.filter((index, field) => {
      if (socialList.includes(field.name)) return true;
      return false;
    });
    const html = generateSignature({
      name,
      role,
      email,
      web,
      companyAddress,
      nonSocial: nonSocial.get(),
      social: social.get(),
    });
    $('#signature').html(html);
    $('body').addClass('show-generated-content');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });
});