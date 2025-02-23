create table login_details (    
    login_id varchar2(32),
    user_id varchar2(32),
    log_num_dat integer,
    log_dec_time integer,
    login_status varchar2(20),
    constraint pk_#login_details_$login_id primary key(login_id),
    constraint fk_#login_details_$user_id_#user_info_$user_id foreign key(user_id) references user_info(user_id),
    constraint fk_#login_details_$login_status_#login_status_enum_$login_status foreign key(login_status) references login_status_enum(login_status)
);

desc login_details;
    
select * from login_details;
