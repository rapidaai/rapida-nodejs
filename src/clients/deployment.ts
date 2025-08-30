/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 *  This module provides functions for managing assistants using gRPC. It includes
 *  operations for creating, updating, retrieving, and personalizing assistants,
 *  as well as handling assistant provider models and tags.
 */

import { Content, Metadata } from "@/rapida/clients/protos/common_pb";

import { ServiceError } from "@grpc/grpc-js";
import { WithAuthContext } from "@/rapida/clients";
import {
  AssistantDeploymentCapturer,
  AssistantPhoneDeployment,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import {
  AssistantDebuggerDeployment,
  CreateAssistantApiDeploymentRequest,
  AssistantApiDeploymentResponse,
  CreateAssistantDebuggerDeploymentRequest,
  CreateAssistantPhoneDeploymentRequest,
  AssistantPhoneDeploymentResponse,
  AssistantWebpluginDeploymentResponse,
  CreateAssistantWhatsappDeploymentRequest,
  GetAssistantDeploymentRequest,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import {
  DeploymentAudioProvider,
  AssistantWebpluginDeployment,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import {
  AssistantWhatsappDeploymentResponse,
  AssistantWhatsappDeployment,
} from "./protos/assistant-deployment_pb";
import {
  AssistantDebuggerDeploymentResponse,
  CreateAssistantWebpluginDeploymentRequest,
} from "@/rapida/clients/protos/assistant-deployment_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function CreateAssistantDebuggerDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  persona: {
    name?: string;
    role?: string;
    tone?: string;
    expertise?: string;
  },
  experience: {
    greeting: string;
    messageOnError?: string;
    messageOnEnd?: string;
  },
  inputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  outputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  audioStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  textStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null
): Promise<AssistantDebuggerDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantDebuggerDeploymentRequest();
    const deployment = new AssistantDebuggerDeployment();

    deployment.setAssistantid(assistantId);
    deployment.setName(persona.name || "");
    deployment.setRole(persona.role || "");
    deployment.setTone(persona.tone || "");
    deployment.setExperties(persona.expertise || "");
    deployment.setGreeting(experience.greeting);
    if (experience?.messageOnError)
      deployment.setMistake(experience?.messageOnError);
    if (experience?.messageOnEnd)
      deployment.setEnding(experience?.messageOnEnd);

    if (inputAudio) {
      const inputAudioProvider = new DeploymentAudioProvider();
      inputAudioProvider.setId(inputAudio.providerId);
      inputAudioProvider.setAudioprovider(inputAudio.provider);
      inputAudioProvider.setAudiooptionsList(inputAudio.parameters);
      inputAudioProvider.setAudioproviderid(inputAudio.providerId);
      deployment.setInputaudio(inputAudioProvider);
    }

    if (outputAudio) {
      const outputAudioProvider = new DeploymentAudioProvider();
      outputAudioProvider.setId(outputAudio.providerId);
      outputAudioProvider.setAudioprovider(outputAudio.provider);
      outputAudioProvider.setAudiooptionsList(outputAudio.parameters);
      outputAudioProvider.setAudioproviderid(outputAudio.providerId);
      deployment.setOutputaudio(outputAudioProvider);
    }

    if (audioStorageConfig) {
      const audioCapturer = new AssistantDeploymentCapturer();
      audioCapturer.setCapturerprovider(audioStorageConfig.provider);
      audioCapturer.setCapturerproviderid(audioStorageConfig.providerId);
      audioCapturer.setCaptureroptionsList(audioStorageConfig.parameters);
      audioCapturer.setCapturertype("audio");
      deployment.addCapturers(audioCapturer);
    }

    if (textStorageConfig) {
      const textCapturer = new AssistantDeploymentCapturer();
      textCapturer.setCapturerprovider(textStorageConfig.provider);
      textCapturer.setCapturerproviderid(textStorageConfig.providerId);
      textCapturer.setCaptureroptionsList(textStorageConfig.parameters);
      textCapturer.setCapturertype("text");
      deployment.addCapturers(textCapturer);
    }

    req.setDeployment(deployment);
    connectionConfig.assistantDeploymentClient.createAssistantDebuggerDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantDebuggerDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantDebuggerDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string
): Promise<AssistantDebuggerDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAssistantDeploymentRequest();
    req.setAssistantid(assistantId);
    connectionConfig.assistantDeploymentClient.getAssistantDebuggerDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantDebuggerDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function CreateAssistantApiDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  persona: {
    name?: string;
    role?: string;
    tone?: string;
    expertise?: string;
  },
  experience: {
    greeting: string;
    messageOnError?: string;
    messageOnEnd?: string;
  },
  inputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  outputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  audioStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  textStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null
): Promise<AssistantApiDeploymentResponse> {
  const req = new CreateAssistantApiDeploymentRequest();
  const deployment = new AssistantDebuggerDeployment();
  deployment.setAssistantid(assistantId);
  deployment.setName(persona.name || "");
  deployment.setRole(persona.role || "");
  deployment.setTone(persona.tone || "");
  deployment.setExperties(persona.expertise || "");
  deployment.setGreeting(experience.greeting);
  if (experience?.messageOnError)
    deployment.setMistake(experience?.messageOnError);
  if (experience?.messageOnEnd) deployment.setEnding(experience?.messageOnEnd);

  if (inputAudio) {
    const inputAudioProvider = new DeploymentAudioProvider();
    inputAudioProvider.setId(inputAudio.providerId);
    inputAudioProvider.setAudioprovider(inputAudio.provider);
    inputAudioProvider.setAudiooptionsList(inputAudio.parameters);
    inputAudioProvider.setAudioproviderid(inputAudio.providerId);
    deployment.setInputaudio(inputAudioProvider);
  }

  if (outputAudio) {
    const outputAudioProvider = new DeploymentAudioProvider();
    outputAudioProvider.setId(outputAudio.providerId);
    outputAudioProvider.setAudioprovider(outputAudio.provider);
    outputAudioProvider.setAudiooptionsList(outputAudio.parameters);
    outputAudioProvider.setAudioproviderid(outputAudio.providerId);
    deployment.setOutputaudio(outputAudioProvider);
  }

  if (audioStorageConfig) {
    const audioCapturer = new AssistantDeploymentCapturer();
    audioCapturer.setCapturerprovider(audioStorageConfig.provider);
    audioCapturer.setCapturerproviderid(audioStorageConfig.providerId);
    audioCapturer.setCaptureroptionsList(audioStorageConfig.parameters);
    audioCapturer.setCapturertype("audio");
    deployment.addCapturers(audioCapturer);
  }

  if (textStorageConfig) {
    const textCapturer = new AssistantDeploymentCapturer();
    textCapturer.setCapturerprovider(textStorageConfig.provider);
    textCapturer.setCapturerproviderid(textStorageConfig.providerId);
    textCapturer.setCaptureroptionsList(textStorageConfig.parameters);
    textCapturer.setCapturertype("text");
    deployment.addCapturers(textCapturer);
  }

  req.setDeployment(deployment);
  return new Promise((resolve, reject) => {
    connectionConfig.assistantDeploymentClient.createAssistantApiDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantApiDeploymentResponse | null
      ) => {
        err ? reject(err) : resolve(response!);
      }
    );
  });
}

export function GetAssistantApiDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string
): Promise<AssistantApiDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAssistantDeploymentRequest();
    req.setAssistantid(assistantId);
    return connectionConfig.assistantDeploymentClient.getAssistantApiDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantApiDeploymentResponse | null
      ) => {
        err ? reject(err) : resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function CreateAssistantWebpluginDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  persona: {
    name?: string;
    role?: string;
    avatarUrl?: string;
    avatar?: {
      file: Uint8Array;
      type: string;
      size: number;
      name: string;
    };
    tone?: string;
    expertise?: string;
  },
  experience: {
    greeting: string;
    suggestions: string[];
    messageOnError: string;
    messageOnEnd: string;
  },
  feature: {
    qAListing: boolean;
    productCatalog: boolean;
    blogPost: boolean;
  },
  inputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  outputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  audioStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  textStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null
): Promise<AssistantWebpluginDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantWebpluginDeploymentRequest();
    const webDeployment = new AssistantWebpluginDeployment();

    webDeployment.setAssistantid(assistantId);
    webDeployment.setName(persona.name || "");
    webDeployment.setRole(persona.role || "");
    webDeployment.setTone(persona.tone || "");
    webDeployment.setExperties(persona.expertise || "");
    webDeployment.setGreeting(experience.greeting);
    webDeployment.setMistake(experience.messageOnError);
    webDeployment.setEnding(experience.messageOnEnd);
    webDeployment.setSuggestionList(experience.suggestions);
    webDeployment.setHelpcenterenabled(feature.qAListing);
    webDeployment.setProductcatalogenabled(feature.productCatalog);
    webDeployment.setArticlecatalogenabled(feature.blogPost);
    webDeployment.setUploadfileenabled(false); // Not provided in the input, set to false by default

    if (inputAudio) {
      const inputAudioProvider = new DeploymentAudioProvider();
      inputAudioProvider.setId(inputAudio.providerId);
      inputAudioProvider.setAudioprovider(inputAudio.provider);
      inputAudioProvider.setAudiooptionsList(inputAudio.parameters);
      inputAudioProvider.setAudioproviderid(inputAudio.providerId);
      webDeployment.setInputaudio(inputAudioProvider);
    }

    if (outputAudio) {
      const outputAudioProvider = new DeploymentAudioProvider();
      outputAudioProvider.setId(outputAudio.providerId);
      outputAudioProvider.setAudioprovider(outputAudio.provider);
      outputAudioProvider.setAudiooptionsList(outputAudio.parameters);
      outputAudioProvider.setAudioproviderid(outputAudio.providerId);

      webDeployment.setOutputaudio(outputAudioProvider);
    }

    if (persona.avatar && persona.avatar.file) {
      const cntn = new Content();
      cntn.setContent(persona.avatar.file);
      cntn.setName(persona.avatar.name);
      cntn.setContenttype(persona.avatar.type);
      webDeployment.setRaw(cntn);
    } else if (persona.avatarUrl) {
      webDeployment.setUrl(persona.avatarUrl);
    }

    if (audioStorageConfig) {
      const audioCapturer = new AssistantDeploymentCapturer();
      audioCapturer.setCapturerprovider(audioStorageConfig.provider);
      audioCapturer.setCapturerproviderid(audioStorageConfig.providerId);
      audioCapturer.setCaptureroptionsList(audioStorageConfig.parameters);
      audioCapturer.setCapturertype("audio");
      webDeployment.addCapturers(audioCapturer);
    }

    if (textStorageConfig) {
      const textCapturer = new AssistantDeploymentCapturer();
      textCapturer.setCapturerprovider(textStorageConfig.provider);
      textCapturer.setCapturerproviderid(textStorageConfig.providerId);
      textCapturer.setCaptureroptionsList(textStorageConfig.parameters);
      textCapturer.setCapturertype("text");
      webDeployment.addCapturers(textCapturer);
    }

    req.setDeployment(webDeployment);
    connectionConfig.assistantDeploymentClient.createAssistantWebpluginDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantWebpluginDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantWebpluginDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string
): Promise<AssistantWebpluginDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAssistantDeploymentRequest();
    req.setAssistantid(assistantId);
    return connectionConfig.assistantDeploymentClient.getAssistantWebpluginDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantWebpluginDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function CreateAssistantPhoneDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  persona: {
    name?: string;
    role?: string;
    tone?: string;
    expertise?: string;
  },
  experience: {
    greeting: string;
    messageOnError: string;
    messageOnEnd: string;
  },
  telephonyConfig: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  inputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  outputAudio?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  audioStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null,
  textStorageConfig?: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null
): Promise<AssistantPhoneDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantPhoneDeploymentRequest();
    const deployment = new AssistantPhoneDeployment();
    deployment.setAssistantid(assistantId);
    deployment.setName(persona.name || "");
    deployment.setRole(persona.role || "");
    deployment.setTone(persona.tone || "");
    deployment.setExperties(persona.expertise || "");
    deployment.setGreeting(experience.greeting);
    deployment.setMistake(experience.messageOnError);
    deployment.setEnding(experience.messageOnEnd);

    if (telephonyConfig) {
      deployment.setPhoneoptionsList(telephonyConfig.parameters);
      deployment.setPhoneproviderid(telephonyConfig.providerId);
      deployment.setPhoneprovidername(telephonyConfig.provider);
    }

    if (inputAudio) {
      const inputAudioProvider = new DeploymentAudioProvider();
      inputAudioProvider.setId(inputAudio.providerId);
      inputAudioProvider.setAudioprovider(inputAudio.provider);
      inputAudioProvider.setAudiooptionsList(inputAudio.parameters);
      inputAudioProvider.setAudioproviderid(inputAudio.providerId);
      deployment.setInputaudio(inputAudioProvider);
    }

    if (outputAudio) {
      const outputAudioProvider = new DeploymentAudioProvider();
      outputAudioProvider.setId(outputAudio.providerId);
      outputAudioProvider.setAudioprovider(outputAudio.provider);
      outputAudioProvider.setAudiooptionsList(outputAudio.parameters);
      outputAudioProvider.setAudioproviderid(outputAudio.providerId);
      deployment.setOutputaudio(outputAudioProvider);
    }

    if (audioStorageConfig) {
      const audioCapturer = new AssistantDeploymentCapturer();
      audioCapturer.setCapturerprovider(audioStorageConfig.provider);
      audioCapturer.setCapturerproviderid(audioStorageConfig.providerId);
      audioCapturer.setCaptureroptionsList(audioStorageConfig.parameters);
      audioCapturer.setCapturertype("audio");
      deployment.addCapturers(audioCapturer);
    }

    if (textStorageConfig) {
      const textCapturer = new AssistantDeploymentCapturer();
      textCapturer.setCapturerprovider(textStorageConfig.provider);
      textCapturer.setCapturerproviderid(textStorageConfig.providerId);
      textCapturer.setCaptureroptionsList(textStorageConfig.parameters);
      textCapturer.setCapturertype("text");
      deployment.addCapturers(textCapturer);
    }

    req.setDeployment(deployment);
    connectionConfig.assistantDeploymentClient.createAssistantPhoneDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantPhoneDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantPhoneDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string
): Promise<AssistantPhoneDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAssistantDeploymentRequest();
    req.setAssistantid(assistantId);
    connectionConfig.assistantDeploymentClient.getAssistantPhoneDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantPhoneDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function CreateAssistantWhatsappDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  persona: {
    name?: string;
    role?: string;
    tone?: string;
    expertise?: string;
  },
  experience: {
    greeting: string;
    messageOnError: string;
    messageOnEnd: string;
  },
  whatsappConfig: {
    providerId: string;
    provider: string;
    parameters: Metadata[];
  } | null
): Promise<AssistantWhatsappDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantWhatsappDeploymentRequest();
    const deployment = new AssistantWhatsappDeployment();

    deployment.setAssistantid(assistantId);
    deployment.setName(persona.name || "");
    deployment.setRole(persona.role || "");
    deployment.setTone(persona.tone || "");
    deployment.setExperties(persona.expertise || "");
    deployment.setGreeting(experience.greeting);
    deployment.setMistake(experience.messageOnError);
    deployment.setEnding(experience.messageOnEnd);
    if (whatsappConfig) {
      deployment.setWhatsappproviderid(whatsappConfig.providerId);
      deployment.setWhatsappprovidername(whatsappConfig.provider);
      deployment.setWhatsappoptionsList(whatsappConfig.parameters);
    }

    req.setDeployment(deployment);
    connectionConfig.assistantDeploymentClient.createAssistantWhatsappDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantWhatsappDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param cb
 * @param authHeader
 * @returns
 */
export function GetAssistantWhatsappDeployment(
  connectionConfig: ConnectionConfig,
  assistantId: string
): Promise<AssistantWhatsappDeploymentResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAssistantDeploymentRequest();
    req.setAssistantid(assistantId);
    connectionConfig.assistantDeploymentClient.getAssistantWhatsappDeployment(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: AssistantWhatsappDeploymentResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
