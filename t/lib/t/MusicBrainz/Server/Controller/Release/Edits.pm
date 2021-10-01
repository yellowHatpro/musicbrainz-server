package t::MusicBrainz::Server::Controller::Release::Edits;
use Test::Routine;
use Test::More;

with 't::Mechanize', 't::Context';

test all => sub {

my $test = shift;
my $mech = $test->mech;
my $c    = $test->c;

MusicBrainz::Server::Test->prepare_test_database($c);

$mech->get_ok('/release/f205627f-b70a-409d-adbe-66289b614e80/edits',
              'fetch release editing history');

};

1;
