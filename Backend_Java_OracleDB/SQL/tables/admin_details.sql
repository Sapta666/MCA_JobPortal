create table admin_details (
    admin_id varchar(32),
    user_id varchar2(32),
    constraint pk_#admin_details_$admin_id primary key(admin_id),
    constraint fk_#admin_details_$user_id_#user_info_$user_id foreign key(user_id) references user_info(user_id)
);

desc admin_details;

select * from admin_details;