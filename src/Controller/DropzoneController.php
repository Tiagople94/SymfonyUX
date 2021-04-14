<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DropzoneController extends AbstractController
{
    /**
     * @Route("/dropzone", name="dropzone")
     */
    public function index(): Response
    {
        return $this->render('dropzone/index.html.twig', [
            'controller_name' => 'DropzoneController',
        ]);
    }
}
