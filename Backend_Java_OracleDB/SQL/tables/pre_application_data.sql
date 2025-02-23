create table pre_application_data (
    pre_app_id varchar2(32),
    pre_app_data varchar2(256),
    constraint pk_#pre_application_data_$pre_app_id primary key(pre_app_id)
);

desc pre_application_data;

select * from pre_application_data;

commit;