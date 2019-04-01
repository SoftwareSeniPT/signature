function generateSignature({
  name,
  role,
  email,
  web,
  nonSocial,
  social,
  companyAddress,
}) {
  const nonSocialComposed = nonSocial && nonSocial.length && nonSocial.map((field) => {
    switch (field.name) {
      case 'phone':
        return `
          <tr>
            <td style="padding:5px 5px 5px 0">
              <img
                style="display:block;width: 15px;height:15px"
                src="https://1.bp.blogspot.com/-znJcQe_y3cw/XKGP8jJE2AI/AAAAAAAACQc/DoJX-rUcTTIr6Vuj9oMTdEQRIHufY7nRQCLcBGAs/s1600/iconfinder_ic_local_phone_48px_352510.png"
                alt="Phone" class="CToWUd" />
            </td>
            <td style="padding:5px 0">
              <a
                style="color:#19312E;text-decoration:none"
                href="tel:${field.value}"
                title="Phone"
                target="_blank">
                ${field.value}
              </a>
            </td>
          </tr>
        `;
      case 'fax':
        return `
          <tr>
            <td style="padding:5px 5px 5px 0">
              <img
                style="display:block;width: 15px;height:15px"
                src="https://2.bp.blogspot.com/-kPB430KagBw/XKGP8QpqSGI/AAAAAAAACQY/AphF8YaphhEaBNW6jQdYamwEOwRYGwwYwCLcBGAs/s1600/iconfinder_fax_1608694.png"
                alt="Fax" class="CToWUd">
              </td>
            <td>
              <a
                style="color:#19312E;text-decoration:none"
                href="tel:${field.value}"
                title="Fax" target="_blank">
                ${field.value}
              </a>
            </td>
          </tr>
        `;
      case 'home':
        return `
          <tr>
            <td style="padding:5px 5px 5px 0">
              <img style="display:block;width: 15px;height:15px"
                src="https://3.bp.blogspot.com/-ffjB-Gliicg/XKGP7zdrO7I/AAAAAAAACQQ/ewGLV2kRI_Yj6o4N0JPELgVVe7WaAipBACLcBGAs/s1600/iconfinder_Location_4200779.png"
                alt="Home" class="CToWUd">
            </td>
            <td>
              ${field.value}
            </td>
          </tr>
        `;
      case 'email':
        return `
          <tr>
            <td style="padding:5px 5px 5px 0">
              <img
                style="display:block;width: 15px;height:15px"
                src="https://1.bp.blogspot.com/-n9cZDa6gIXU/XKGP8y3mevI/AAAAAAAACQg/40eHWOm_Q4I7JqCIngHBY3n6g5M62cB9QCLcBGAs/s1600/iconfinder_mail-24_103176.png"
                alt="Email" class="CToWUd" />
            </td>
            <td>
              <a
                style="color:#19312E;text-decoration:none"
                href="mailto:${field.value}"
                title="Email" target="_blank">
                ${field.value}
              </a>
            </td>
          </tr>
        `;
      case 'web':
        return `
          <tr>
            <td style="padding:5px 5px 5px 0">
              <img
                style="display:block;width: 15px;height:15px"
                src="https://2.bp.blogspot.com/--r-Vo4MwXQY/XKGP60WC6TI/AAAAAAAACQA/irWWspiqPqIUgExpb5-tU-P1XyaHESWBACLcBGAs/s1600/iconfinder_075_Globe_183204.png"
                alt="Website" class="CToWUd">
              </td>
            <td>
              <a
                style="color:#19312E;text-decoration:none"
                href="${field.value}"
                title="Link" target="_blank">
                ${field.value}
              </a>
            </td>
          </tr>
        `;
      default:
        return '';
    }
  });
  
  const socialComposed = social && social.length && social.map((field) => {
    switch (field.name) {
      case 'facebook':
        return `
          <a href="https://www.facebook.com/${field.value}" title="Facebook" target="_blank">
            <img
              style="width: 18px;height:18px"
              src="https://1.bp.blogspot.com/-C_eLsPTlogk/XKGP69tu8lI/AAAAAAAACQE/DTBsCNF9QDkeJNIkA6al-xC_mOUKzjePQCLcBGAs/s1600/iconfinder_Facebook_194929.png"
              alt="Facebook" border="0" class="CToWUd">
          </a>
        `;
      case 'twitter':
        return `
          <a href="https://twitter.com/${field.value}" title="Twitter" target="_blank">
            <img
              style="width: 18px;height:18px"
              src="https://4.bp.blogspot.com/-DVL7CpOjP9U/XKGP8LHH9ZI/AAAAAAAACQU/XFK4tTKzRbE_piOv8dyOoilgRkCHeRktgCLcBGAs/s1600/iconfinder_Twitter_194909.png"
              alt="Twitter" border="0" class="CToWUd">
          </a>
        `;
      case 'instagram':
        return `
          <a href="https://www.instagram.com/${field.value}" title="Instagram" target="_blank">
            <img
              style="width: 18px;height:18px"
              src="https://4.bp.blogspot.com/-tS3EcPHjsD4/XKGP7NmOa7I/AAAAAAAACQI/gs8UPupskwgsG4i3EY-V-ITGWO9UiJt-QCLcBGAs/s1600/iconfinder_38-instagram_1161953.png"
              alt="Instagram" border="0" class="CToWUd">
          </a>
        `;
      case 'linkedin':
        return `
          <a href="${field.value}" title="Linkedin" target="_blank">
            <img
              style="width: 18px;height:18px"
              src="https://3.bp.blogspot.com/-TyYSCRjQYyo/XKGP7vSJEqI/AAAAAAAACQM/HRiLdx4lY_YDZ5c8Abj2saN-KDwNiJolQCLcBGAs/s1600/iconfinder_LinkedIn_194920.png"
              alt="Linkedin" border="0" class="CToWUd">
          </a>
        `;
      default:
        return '';
    }
  });

  return `
    <table style="width:100%;color:#666" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td style="font-size:16px;font-weight:bold;color:#222">${name}</td>
        </tr>
        <tr>
          <td style="padding:5px 0 8px; font-size:15px;font-weight:bold; color: #464646">${role}</td>
        </tr>
        <tr>
          <td style="padding:7px 0 10px;border-top:1px solid #eaeaea">
            <table style="width:100%" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td style="width:70%;padding-top:2px">
                    <table style="font-size:13px" cellspacing="0" cellpadding="0" align="left">
                      <tbody>
                        <tr>
                          <td style="padding:5px 5px 5px 0">
                            <img
                              style="display:block;width: 15px;height:15px"
                              src="https://1.bp.blogspot.com/-n9cZDa6gIXU/XKGP8y3mevI/AAAAAAAACQg/40eHWOm_Q4I7JqCIngHBY3n6g5M62cB9QCLcBGAs/s1600/iconfinder_mail-24_103176.png"
                              alt="Email" class="CToWUd" />
                          </td>
                          <td>
                            <a
                              style="color:#19312E;text-decoration:none"
                              href="mailto:${email}"
                              title="Email" target="_blank">
                              ${email}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:5px 5px 5px 0">
                            <img
                              style="display:block;width: 15px;height:15px"
                              src="https://2.bp.blogspot.com/--r-Vo4MwXQY/XKGP60WC6TI/AAAAAAAACQA/irWWspiqPqIUgExpb5-tU-P1XyaHESWBACLcBGAs/s1600/iconfinder_075_Globe_183204.png"
                              alt="Website" class="CToWUd">
                            </td>
                          <td>
                            <a
                              style="color:#19312E;text-decoration:none"
                              href="${web}"
                              title="Link" target="_blank">
                              ${web}
                            </a>
                          </td>
                        </tr>
                        ${nonSocialComposed && nonSocialComposed.length && nonSocialComposed.join('') || ''}
                      </tbody>
                    </table>
                  </td>
                  <td style="width:30%;padding-top:5px;vertical-align: bottom;">
                    <table style="width:100%;text-align:right" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td>
                            <a href="https://www.softwareseni.com" title="SoftwareSeni" target="_blank">
                              <img
                                style="width:133px;max-width:100%;height:auto"
                                src="https://4.bp.blogspot.com/-vJ1lLgpw53c/XKGWLe3uSPI/AAAAAAAACRQ/QiZ9eHVCz3o6PRw9naePcA4ooPvfLtMoACLcBGAs/s320/download.png"
                                alt="SoftwareSeni" border="0" class="CToWUd"></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table style="width:100%;font-family:Arial,Helvetica,sans-serif;font-size:13px" cellspacing="0"
              cellpadding="0">
              <tbody>
                <tr>
                  <td style="width:50%;padding:6px 0 5px 7px;background-color:#0FA79E;color:#ffffff">
                    ${companyAddress || 'Jl. Pakuningratan No.15, Yogyakarta 55233'}
                  </td>
                  <td
                    style="padding:5px 7px 2px;background-color:#19312F;text-align:right;vertical-align:middle">
                    ${socialComposed && socialComposed.length && socialComposed.join('') || ''}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>  
  `;
}