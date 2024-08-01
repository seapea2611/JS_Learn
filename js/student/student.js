$(document).ready(function() {
    $('#searchButton').on('click', function() {
        var searchInput = $('#searchInput').val().toLowerCase();
        $('#searchResults tbody tr').each(function() {
            var name = $(this).find('td:eq(0)').text().toLowerCase();
            var id = $(this).find('td:eq(1)').text().toLowerCase();
            var phone = $(this).find('td:eq(5)').text().toLowerCase();
            var email = $(this).find('td:eq(6)').text().toLowerCase();
            var classS = $(this).find('td:eq(7)').text().toLowerCase();
            var department = $(this).find('td:eq(8)').text().toLowerCase();

            if (name.includes(searchInput) || id.includes(searchInput) || phone.includes(searchInput) || email.includes(searchInput) || classS.includes(searchInput) || department.includes(searchInput)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    });

    $('#addButton').click(function() {
        $('#addModal').modal('show');
    });

    $('#confirmAddButton').on('click', function() {
        var name = $('#nameInput').val();
        var id = $('#idInput').val();
        var birth = $('#birthInput').val();
        var grade = $('#gradeInput').val();
        var sex = $('#sexInput').prop('checked') ? 'Male' : 'Female';
        var phone = $('#phoneInput').val();
        var mail = $('#mailInput').val();
        var classS = $('#classInput').val();
        var department = $('#departmentInput').val();
        var awards = [];
        $('input[name="award"]:checked').each(function() {
            awards.push($(this).val());
        });
        var awardsStr = awards.join(', ');

        var requiredFields = [name, id, phone, mail, classS, department];

        for (var i = 0; i < requiredFields.length; i++) {
            if (requiredFields[i] === '') {
                $('#errorMessage').text('Please fill out all required fields.').css('color', 'red');
                return;
            }
        }
        $('#errorMessage').text('');

        var newRow = '<tr><td><input type="checkbox" class="selectCheckbox"></td>' + '<td>' + name + '</td><td>' + id + '</td><td>' + birth + '</td><td>' + grade + '</td><td>' + sex + '</td><td>' + phone + '</td><td>' + mail + '</td><td>' + classS + '</td><td>' + department + '</td><td>' + awardsStr + '</td><td><button class="btn btn-outline-primary editButton" title="Edit"> <img src="../../img/edit.png" alt="Edit" style="width: 18px; height: 18px;"></button> </td>' + '<td><button class="btn btn-outline-primary deleteButton" title="Delete"><img src="../../img/remove.png" alt="Delete" style="width: 18px; height: 18px;"></button></td></tr>';
        $('#searchResults tbody').append(newRow);
        $('#addModal').modal('hide');
    });

    var $row;

    $(document).on('click', '.editButton', function() {
        $row = $(this).closest('tr');

        var name = $row.find('td:eq(1)').text();
        var phone = $row.find('td:eq(6)').text();
        var email = $row.find('td:eq(7)').text();
        var classS = $row.find('td:eq(8)').text();
        var department = $row.find('td:eq(9)').text();

        $('#editNameInput').val(name);
        $('#editPhoneInput').val(phone);
        $('#editMailInput').val(email);
        $('#editClassInput').val(classS);
        $('#editDepartmentInput').val(department);

        $('#editModal').modal('show');
    });

    $('#acceptEditButton').click(function() {
        var editedName = $('#editNameInput').val();
        var editedPhone = $('#editPhoneInput').val();
        var editedMail = $('#editMailInput').val();
        var editedClass = $('#editClassInput').val();
        var editedDepartment = $('#editDepartmentInput').val();

        //var $row = $('.editButton').closest('tr');
        $row.find('td:eq(1)').text(editedName);
        $row.find('td:eq(5)').text(editedPhone);
        $row.find('td:eq(6)').text(editedMail);
        $row.find('td:eq(7)').text(editedClass);
        $row.find('td:eq(8)').text(editedDepartment);

        $('#editModal').modal('hide');
    });

    $(document).on('click', '.deleteButton', function() {
        $row = $(this).closest('tr');
        $('#confirmDeleteButton').data('row', $row);
        $('#confirmDeleteModal').modal('show');
    });


    $(document).on('click', '#confirmDeleteButton', function() {
        $row.remove();
        $('#confirmDeleteModal').modal('hide');
    });

    $('#confirmDeleteManyButton').click(function() {
        $('.selectCheckbox:checked').each(function() {
            $(this).closest('tr').remove();
        });
        $('#confirmDeleteManyModal').modal('hide');
    });

});