create table chat_info(
    chat_id varchar2(32),
    employer_id varchar2(32),
    jobseeker_id varchar2(32),
    constraint pk_#chat_info_$chat_id primary key(chat_id),
    constraint fk_#chat_info_$employer_id_#employer_details_$employer_id foreign key (employer_id) references employer_details(employer_id),
    constraint fk_#chat_info_$jobseeker_id_#jobseeker_details_$jobseeker_id foreign key (jobseeker_id) references jobseeker_details(jobseeker_id)
);

desc chat_info;

select * from chat_info;